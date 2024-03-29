import React, { useEffect, useState } from "react"
import Icon from "react-native-vector-icons/Feather"
import { Alert, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { useDebts } from "../../contexts/debtsContext"
import Debt from "../components/Debt"
import ChangeBalanceModal from "../components/ChangeBalanceModal"
import Header from "../components/Header"
import CreateDebtModal from "../components/CreateDebtModal"
import UpdateDebtModal from "../components/UpdateDebtModal"
import styles from "./styles"



const HomeScreen = () => {

  const [ isBalanceModal, setIsBalanceModal ] = useState(false)
  const [ isCreateDebtsModal, setIsCreateDebtsModal ] = useState(false)
  const { debts } = useDebts()

  const [ nameSelected, setNameSelected ] = useState("")
  const [ valueSelected, setValueSelected ] = useState(0)
  const [ isUpdateDebtModal, setIsUpdateDebtModal ] = useState(false)

  return (
    <View style={styles.container}>
      <Header title="Gerencie seus gastos e economize seu dinheiro" setIsBalanceModal={setIsBalanceModal} />
      
      {isBalanceModal &&
        <ChangeBalanceModal setIsBalanceModal={setIsBalanceModal} />    
      }

      {isCreateDebtsModal &&
        <CreateDebtModal setIsCreateDebtsModal={setIsCreateDebtsModal} />
      }

      { isUpdateDebtModal &&
        <UpdateDebtModal 
          setIsUpdateModal={setIsUpdateDebtModal} 
          nameDebt={nameSelected}  
          valueDebt={valueSelected}
        />
      }

      <ScrollView style={styles.debtsContainer}>
        {String(debts)?.length > 0?
          debts?.map(item => (
            <Debt 
              key={`${item.date}_${item.name}`} 
              name={item.name} 
              date={String(item.date)} 
              value={String(item.value)}
              setNameSelected={setNameSelected}
              setValueSelected={setValueSelected}
              setIsUpdateDebtModal={setIsUpdateDebtModal}
            />
          ))
          :
          <Text style={styles.noDebtsText}>Nenhuma dívida Cadastrada</Text>
        }
      </ScrollView>

      <TouchableOpacity style={styles.addDebtButton} onPress={() => setIsCreateDebtsModal(true)}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
