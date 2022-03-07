import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config";

export default StyleSheet.create({
  container : {
    backgroundColor: COLORS.background,
    height: "100%",
    position: "relative"
  },

  title: {
    fontFamily: FONTS.title,
  },

  debtsContainer: {
    paddingHorizontal: 22
  },

  addDebtButton: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    padding: 14,
    borderRadius: 50,
    bottom: 10,
    right: 10
  }
})