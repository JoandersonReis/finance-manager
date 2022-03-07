import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"

import styles from "./styles";


interface IDebt {
  name: string,
  date: string,
  value: string
}

const Debt = ({ name, date, value }: IDebt) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>-{value}</Text>
      </View>

      <Text style={styles.date}>{date}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="edit" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.removeButton}>
          <Icon name="trash" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Debt

