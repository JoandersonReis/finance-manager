import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import DatePicker from 'react-native-date-picker'

import { COLORS } from "../../../config";
import { useDebts } from "../../../contexts/debtsContext";

import styles from "./styles";

interface IModal {
  setIsUpdateModal: (actived: boolean) => void,
  nameDebt: string,
  valueDebt: number,
}

const UpdateDebtModal = ({ setIsUpdateModal, nameDebt, valueDebt }: IModal) => {
  const [ name, setName ] = useState(nameDebt)
  const [ date, setDate ] = useState<Date>(new Date())
  const [ value, setValue ] = useState(valueDebt)

  const { updateDebt } = useDebts()

  function handleUpdateDebt() {
    updateDebt(name, date, value)

    setIsUpdateModal(false)

  }


  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TouchableOpacity style={styles.quitModalButton} onPress={() => setIsUpdateModal(false)}>
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
        />

        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput 
          keyboardType="numeric" 
          style={styles.input} 
          defaultValue={String(value)}
          onChangeText={text => setValue(Number(text))}
        />

        <TouchableOpacity style={styles.createDebtButton} onPress={handleUpdateDebt}>
          <Text style={styles.createDebtButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpdateDebtModal
