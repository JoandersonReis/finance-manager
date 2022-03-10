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
  deleteDebt: (name: string) => void
}

interface IDebtsPovider {
  children: ReactNode
}

export const DebtsContext = createContext({} as IDebtsContextData)

function DebtsProvider({ children }: IDebtsPovider) {

  const [ balanceValue, setBalanceValue ] = useState<number>(0)
  const [ debts, setDebts ] = useState<IDebt[]>([])
  const debtsStore = async (value: IDebt[]) => {
    await AsyncStorage.setItem('@debts', JSON.stringify(value))
  }

  async function loadDebts() {
    const debtsStorage = await AsyncStorage.getItem("@debt")

    if(debtsStorage) {
      setDebts(JSON.parse(debtsStorage))

      let valueBalanceCurrent = balanceValue
      
      JSON.parse(debtsStorage).forEach((item: IDebt) => {
        valueBalanceCurrent = item.value + valueBalanceCurrent
      })
      
      setBalanceValue(valueBalanceCurrent)
    }
  }
  
  function sumBalance() {
    let valueBalanceCurrent = balanceValue

    debts.forEach(item => {
      valueBalanceCurrent = item.value + valueBalanceCurrent
    })

    setBalanceValue(valueBalanceCurrent)

  }


  useEffect(() => {
    loadDebts()
  }, [])


  function create(name: string, value: number, date: string) {
    setDebts([...debts, {name, value, date}])

    debtsStore(debts)
    sumBalance()
  }

  function deleteDebt(name: string) {
    const debtsFiltered = debts.filter(item => item.name != name)

    setDebts(debtsFiltered)
    debtsStore(debtsFiltered)
    sumBalance()
  }

  return (
    <DebtsContext.Provider value={{
      debts,
      create,
      setBalanceValue,
      deleteDebt,
      balanceValue
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

