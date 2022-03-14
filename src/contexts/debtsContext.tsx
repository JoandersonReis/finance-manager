import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"


interface IDebt {
  name: string,
  value: number,
  date: string
}

interface IDebtsContextData {
  debts: IDebt[] | undefined,
  create: (name: string, value: number, date: string) => void,
  setBalanceValue: (value: number) => void,
  balanceValue: number,
  deleteDebt: (name: string) => void,
  updateDebt: (name: string, date: string, value: number) => void
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


  async function loadDebts() {
    const debtsStorage = await AsyncStorage.getItem("@debt")

    if(debtsStorage) {
      setDebts(JSON.parse(debtsStorage))

      let debtsValueCurrency = debtsValue
      
      JSON.parse(debtsStorage).forEach((item: IDebt) => {
        debtsValueCurrency = debtsValueCurrency + item.value
      })
      
      setDebtsValue(debtsValueCurrency)
    }
  }
  
  function sumDebts() {
    let valueDebtsCurrency = debtsValue

    debts.forEach(item => {
      valueDebtsCurrency = item.value + valueDebtsCurrency
    })

    setDebtsValue(valueDebtsCurrency)
  }
  
  
  function create(name: string, value: number, date: string) {
    setDebts([...debts, {name, value, date}])
    
    debtsStore(debts)
    sumDebts()
  }

  function deleteDebt(name: string) {
    const debtsFiltered = debts.filter(item => item.name != name)
    
    setDebts(debtsFiltered)
    debtsStore(debtsFiltered)
    sumDebts()
  }


  function updateDebt(name: string, date: string, value: number) {
    const debtsFiltered = debts.filter(item => item.name != name)

    const debtUpdated = {
      name,
      date,
      value
    }

    setDebts([...debts, debtUpdated])
    debtsStore(debtsFiltered)
    sumDebts()
  }


  useEffect(() => {
    loadDebts()
  }, [])

  return (
    <DebtsContext.Provider value={{
      debts,
      create,
      setBalanceValue,
      deleteDebt,
      balanceValue,
      updateDebt
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

