import React, { useDebugValue } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import { useDebts } from "../../../contexts/debtsContext";
import convertDate from "../../../utils/convertDate";

import styles from "./styles";


interface IDebt {
  name: string,
  date: string,
  value: string,
  setNameSelected: (text: string) => void,
  setValueSelected: (value: number) => void,
  setIsUpdateDebtModal: (actived: boolean) => void
}

const Debt = ({ name, date, value, setIsUpdateDebtModal, setNameSelected, setValueSelected }: IDebt) => {
  const { deleteDebt } = useDebts()

  function handleToUpdateDebt() {
    setNameSelected(name)
    setValueSelected(Number(value))

    setIsUpdateDebtModal(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>-{value}</Text>
      </View>

      <Text style={styles.date}>{date.includes("T") && convertDate(String(date))}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleToUpdateDebt}>
          <Icon name="edit" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.removeButton} onPress={() => deleteDebt(name, String(date))}>
          <Icon name="trash" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Debt

