import React from "react";
import { Image, Text, View } from "react-native";


import LogoImage from "../../../../assets/images/logo.png"
import styles from "./styles";


interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={LogoImage} />
        <Text style={styles.money}><Text style={styles.realSign}>R$</Text> 1,200</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

