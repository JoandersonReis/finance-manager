import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../config";

export default StyleSheet.create({
  container: {
    padding: 22,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.darkGray,
    marginBottom: 8
  },

  balanceContainer: {
    flexDirection: "row",

  },

  showBalanceButton: {
    marginTop: 12
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  balanceButton: {
    flexDirection: "column",
  },

  balanceButtonDebtsText: {
    alignSelf: "flex-end",
    color: COLORS.red,
    fontFamily: FONTS.lightText
  },

  money: {
    color: "#fff",
    fontFamily: FONTS.title,
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 12
  },

  realSign: {
    fontSize: 18,
    color: COLORS.primary
  },

  title: {
    fontSize: 24,
    marginTop: 22,
    textAlign: "center",
    fontFamily: FONTS.text,
    color: COLORS.lightGray
  }
})