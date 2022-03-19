import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import IconIon from "react-native-vector-icons/Ionicons"
import axios from "axios"

import { COLORS } from "../../../config"
import styles from "./styles";

interface ICoin {
  type: string,
  coinName: string,
  color: string
}

interface ICoinInfo {
  ticker: {
    high: string,
    low: string,
    last: string
  }
}


const Coin = ({ color, type, coinName }: ICoin) => {
  const [ coinInfo, setCoinInfo ] = useState<ICoinInfo>({ticker: {high: "0", low: "0", last: "0"}})
  
  async function loadCoinInfo() {
    const result = await axios.get(`https://www.mercadobitcoin.net/api/${type}/ticker`)

    setCoinInfo(result.data)
  }

  
  function convertCoinValue(value: string) {
    const [primary, secondary] = Number(value).toFixed(2).split(".")

    const primaryArray = primary.split("").map((item, index) => {
      if(index == primary.length - 3) {
        return `.${item}`
      } else {
        return item
      }
    })

    return `${primaryArray.join("")},${secondary}`
  }
  
  useEffect(() => {
    loadCoinInfo()

    setInterval(() => {
      loadCoinInfo()
    }, 5000)
  }, [])


  return (
    <View style={styles.block}>
      <View style={styles.header}>
        <Text style={[styles.coinName, {color: color}]}>{coinName}</Text>
        <Text style={styles.coinPrice}>
          <Text style={styles.coinType}>R$</Text> {convertCoinValue(coinInfo?.ticker.last)}
        </Text>
      </View>

      <View style={styles.coinValues}>
        <Text style={styles.coinLowPrice}>
          <IconIon name="trending-down-outline" size={16} color={COLORS.red}/> {convertCoinValue(coinInfo?.ticker.low)}
        </Text>

        <Text style={styles.coinHighPrice}>
          <IconIon name="trending-up-outline" size={16} color={COLORS.green}/> {convertCoinValue(coinInfo?.ticker.high)}
        </Text>
      </View>
    </View>
  )
}

export default Coin
