import React, { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import { COLORS } from "../../config"
import ChangeBalanceModal from "../components/ChangeBalanceModal"
import Coin from "../components/Coin"

import Header from "../components/Header"
import styles from "./styles"


const QuoteScreen = () => {
  const [ isBalanceModal, setIsBalanceModal ] = useState(false)

  return (
    <View style={styles.container}>
      <Header title="Cotação de Moedas" setIsBalanceModal={setIsBalanceModal} />

      {isBalanceModal &&
        <ChangeBalanceModal setIsBalanceModal={setIsBalanceModal} />
      }

      <ScrollView style={styles.content}>
        <Coin type="btc" color="#f9ca24" coinName="bitcoin" />

        <Coin type="eth" color={COLORS.lightGray} coinName="ethereum" />
      </ScrollView>
    </View>
  )
}

export default QuoteScreen
