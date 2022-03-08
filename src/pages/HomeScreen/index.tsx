import React, { useEffect } from "react"
import Icon from "react-native-vector-icons/Feather"
import { ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"

import Debt from "../components/Debt"
import Header from "../components/Header"

import styles from "./styles"
import convertDate from "../../utils/convertDate"

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Header title="Gerencie seus gastos e economize seu dinheiro" />
      
      <ScrollView style={styles.debtsContainer}>
        <Debt name="Aluguel" date="2022-03-10T17:98" value="400,00"/>

        <Debt name="Mercado" date="2022-03-10T17:98" value="350,00"/>

        <Debt name="Feira" date="2022-03-10T17:98" value="150,00"/>

        <Debt name="Fatura" date="2022-03-10T17:98" value="200,00"/>

        <Debt name="Energia" date="2022-03-10T17:98" value="110,00"/>
      </ScrollView>

      <TouchableOpacity style={styles.addDebtButton}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
