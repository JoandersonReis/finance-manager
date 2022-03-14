import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDebts } from "../../../contexts/debtsContext";

import styles from "./styles";


const ChangeBalanceModal = () => {
  const { setBalanceValue, balanceValue } = useDebts()
  const [ balanceCurrent, setBalanceCurrent ] = useState(balanceValue)

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput 
          keyboardType="numeric" 
          style={styles.input} 
          defaultValue={String(balanceCurrent)}
          onChangeText={text => setBalanceCurrent(Number(text))} 
        />

        <TouchableOpacity style={styles.changeBalanceButton} onPress={() => setBalanceValue(balanceCurrent)}>
          <Text style={styles.changeBalanceButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeBalanceModal
