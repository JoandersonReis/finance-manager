import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"


interface IDebt {
  name: string,
  value: number,
  date: string|Date
}

interface IDebtsContextData {
  debts: IDebt[] | undefined,
  create: (name: string, value: number, date: Date|string) => void,
  setBalanceCurrentValue: (value: number) => void,
  balanceValue: number,
  deleteDebt: (name: string, date: string) => void,
  updateDebt: (name: string, date: string|Date, value: number) => void,
  debtsValue: number
}

interface IDebtsPovider {
  children: ReactNode
}

export const DebtsContext = createContext({} as IDebtsContextData)

function DebtsProvider({ children }: IDebtsPovider) {

  const [ balanceValue, setBalanceValue ] = useState<number>(0)
  const [ debts, setDebts ] = useState<IDebt[]>([])
  const [ debtsValue, setDebtsValue ] = useState(0)
  const debtsStore = async (value: IDebt[]) => {
    await AsyncStorage.setItem('@debts', JSON.stringify(value))
  }
  const balanceStore = async (value: number) => {
    await AsyncStorage.setItem('@balance', String(value))
  }


  async function loadDebts() {
    const debtsStorage = await AsyncStorage.getItem("@debts")
    const balanceStorage = await AsyncStorage.getItem("@balance")

    if(debtsStorage) {
      setDebts(JSON.parse(debtsStorage))

      let debtsValueCurrency = 0
      
      JSON.parse(debtsStorage).forEach((item: IDebt) => {
        debtsValueCurrency = debtsValueCurrency + item.value
      })
      
      setDebtsValue(debtsValueCurrency)
    }

    if(balanceStorage) {
      setBalanceValue(Number(balanceStorage))
    }
  }

  function setBalanceCurrentValue(value: number) {
    setBalanceValue(value)

    balanceStore(value)
  }
  
  function sumDebts() {
    let valueDebtsCurrency = 0

    debts.forEach(item => {
      valueDebtsCurrency = item.value + valueDebtsCurrency
    })

    setDebtsValue(valueDebtsCurrency)
  }
  
  
  function create(name: string, value: number, date: string|Date) {
    setDebts([{name, value, date}, ...debts])
    
    debtsStore([{name, value, date}, ...debts])
  }

  function deleteDebt(name: string, date: string) {
    const debtsFiltered = debts.filter(item => item.name != name && item.date != date)
    
    setDebts(debtsFiltered)
    debtsStore(debtsFiltered)
  }


  function updateDebt(name: string, date: string|Date, value: number) {
    const debtsFiltered = debts.filter(item => item.name != name && item.date != date)

    const debtUpdated = {
      name,
      date,
      value
    }

    setDebts([debtUpdated, ...debtsFiltered])
    debtsStore([debtUpdated, ...debtsFiltered])
  }


  useEffect(() => {
    loadDebts()
  }, [])

  useEffect(() => {
    sumDebts()
  }, [debts])

  return (
    <DebtsContext.Provider value={{
      debts,
      create,
      setBalanceCurrentValue,
      deleteDebt,
      balanceValue,
      updateDebt,
      debtsValue
    }}>
      {children}
    </DebtsContext.Provider>
  )
}

function useDebts() {
  const context = useContext(DebtsContext)

  return context
}

export { useDebts, DebtsProvider }

