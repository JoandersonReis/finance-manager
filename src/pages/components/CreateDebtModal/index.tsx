import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import DatePicker from 'react-native-date-picker'

import { COLORS } from "../../../config";
import { useDebts } from "../../../contexts/debtsContext";

import styles from "./styles";

interface IModal {
  setIsCreateDebtsModal: (actived: boolean) => void
}

const CreateDebtModal = ({ setIsCreateDebtsModal }: IModal) => {
  const [ name, setName ] = useState("")
  const [ date, setDate ] = useState<Date>(new Date())
  const [ value, setValue ] = useState(0)

  const { create } = useDebts()

  function handleCreateDebt() {
    create(name, value, date)

    setIsCreateDebtsModal(false)

  }


  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TouchableOpacity style={styles.quitModalButton} onPress={() => setIsCreateDebtsModal(false)}>
          <Icon name="x" color={COLORS.red} size={16} />
        </TouchableOpacity>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput 
          style={styles.input} 
          defaultValue={name}
          onChangeText={text => setName(text)}
        />

        <DatePicker 
          onDateChange={setDate}
          date={date}
          androidVariant="nativeAndroid"
          mode="date"
          textColor="#fff"
        />


        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput 
          keyboardType="numeric" 
          style={styles.input} 
          defaultValue={String(value)}
          onChangeText={text => setValue(Number(text))}
        />

        <TouchableOpacity style={styles.createDebtButton} onPress={handleCreateDebt}>
          <Text style={styles.createDebtButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateDebtModal
