import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../config";

export default StyleSheet.create({
  block: {
    paddingVertical: 22,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGray,
    marginBottom: 14
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22
  },

  coinName: {
    fontFamily: FONTS.lightText,
    fontSize: 22,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textTransform: "uppercase"
  },

  coinPrice: {
    fontSize: 18,
    fontFamily: FONTS.text,
    backgroundColor: COLORS.green,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: "#fff"
  },

  coinType: {
    fontSize: 14,
    fontFamily: FONTS.lightText
  },

  coinValues: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  coinLowPrice: {
    color: COLORS.red,
    fontFamily: FONTS.text,
    fontSize: 18
  },

  coinHighPrice: {
    color: COLORS.green,
    fontFamily: FONTS.text,
    fontSize: 18
  }
})