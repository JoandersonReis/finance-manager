import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import { COLORS } from "../../../config";
import { useDebts } from "../../../contexts/debtsContext";

import styles from "./styles";

interface IModal {
  setIsBalanceModal: (actived: boolean) => void
}

const ChangeBalanceModal = ({ setIsBalanceModal }: IModal) => {
  const { setBalanceCurrentValue, balanceValue } = useDebts()
  const [ balanceCurrent, setBalanceCurrent ] = useState(balanceValue)

  function handleChangeBalanceValue() {
    setBalanceCurrentValue(balanceCurrent)
    setIsBalanceModal(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TouchableOpacity style={styles.quitModalButton} onPress={() => setIsBalanceModal(false)}>
          <Icon name="x" color={COLORS.red} size={16} />
        </TouchableOpacity>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput 
          keyboardType="numeric" 
          style={styles.input} 
          defaultValue={String(balanceCurrent)}
          onChangeText={text => setBalanceCurrent(Number(text))} 
        />

        <TouchableOpacity style={styles.changeBalanceButton} onPress={handleChangeBalanceValue}>
          <Text style={styles.changeBalanceButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeBalanceModal
