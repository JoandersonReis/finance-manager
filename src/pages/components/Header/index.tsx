import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"


import LogoImage from "../../../../assets/images/logo.png"
import { COLORS } from "../../../config";
import styles from "./styles";


interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const [ isShowBalance, setIsShowBalance ] = useState(false)
  const [ balance, setBalance ] = useState("1.200,00")

  function handleShowBalance() {
    isShowBalance? setIsShowBalance(false):setIsShowBalance(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={LogoImage} />
        <View style={styles.balanceContainer}>
          <TouchableOpacity onPress={handleShowBalance}>
            {isShowBalance? 
              <Icon name="eye-off" color={COLORS.primary} size={18} />
              :
              <Icon name="eye" color={COLORS.primary} size={18} />
            }
          </TouchableOpacity>
          <Text 
            style={isShowBalance? styles.money:[styles.money, {color: COLORS.lightGray}]}
          >
            <Text style={styles.realSign}>R$</Text> {isShowBalance? balance: "••••••"}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

