import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"


import LogoImage from "../../../../assets/images/logo.png"
import { COLORS } from "../../../config";
import { useDebts } from "../../../contexts/debtsContext";
import styles from "./styles";


interface HeaderProps {
  title: string,
  setIsBalanceModal: (actived: boolean) => void
}

const Header = ({ title, setIsBalanceModal }: HeaderProps) => {
  const { balanceValue, debtsValue, isShowBalance, handleShowBalance } = useDebts()


  function sumCurrentMoney() {
    const sum = Number(balanceValue) - Number(debtsValue)

    if(sum < 0) {
      return `${sum.toFixed(2)}`
    } else {
      return `+${sum.toFixed(2)}`
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={LogoImage} />
        <View style={styles.balanceContainer}>
          <TouchableOpacity style={styles.showBalanceButton} onPress={handleShowBalance}>
            {isShowBalance? 
              <Icon name="eye-off" color={COLORS.primary} size={18} />
              :
              <Icon name="eye" color={COLORS.primary} size={18} />
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.balanceButton} onPress={() => setIsBalanceModal(true)}>
            <Text 
              style={isShowBalance? styles.money:[styles.money, {color: COLORS.lightGray}]}
            >
              <Text style={styles.realSign}>R$</Text> {isShowBalance? balanceValue: "••••••"}
            </Text>

            {isShowBalance &&
              <>
                <Text style={styles.balanceButtonDebtsText}>-{debtsValue?.toFixed(2)}</Text>
                <Text style={styles.balanceButtonCurrentMoneyText}>{sumCurrentMoney()}</Text>
              </>
            }
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

