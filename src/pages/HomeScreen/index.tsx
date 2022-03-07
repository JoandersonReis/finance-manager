import React, { useEffect } from "react"
import Icon from "react-native-vector-icons/Feather"
import { ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"

import Debt from "../components/Debt"
import Header from "../components/Header"

import styles from "./styles"

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Header title="Gerencie seus gastos e economize seu dinheiro" />
      
      <ScrollView style={styles.debtsContainer}>
        <Debt name="Aluguel" date="03 Ago 2021" value="400,00"/>

        <Debt name="Mercado" date="10 Ago 2021" value="350,00"/>

        <Debt name="Feira" date="18 Ago 2021" value="150,00"/>

        <Debt name="Fatura" date="03 Ago 2021" value="200,00"/>

        <Debt name="Energia" date="19 Ago 2021" value="110,00"/>
      </ScrollView>

      <TouchableOpacity style={styles.addDebtButton}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
