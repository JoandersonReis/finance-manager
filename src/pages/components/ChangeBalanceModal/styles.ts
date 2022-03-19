import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../config";

export default StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  block: {
    backgroundColor: COLORS.background,
    zIndex: 99,
    minWidth: "70%",
    paddingHorizontal: 44,
    paddingVertical: 44,
    borderRadius: 8,
    position: "relative"
  },

  quitModalButton: {
    position: "absolute",
    padding: 14,
    right: 0,
    top: 0
  },

  inputLabel: {
    fontFamily: FONTS.title,
    fontSize: 18,
    color: "#fff"
  },

  input: {
    height: 50,
    width: 200,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 8,
    marginBottom: 22,
    marginTop: 14
  },

  changeBalanceButton: {
    width: 200,
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 4
  },

  changeBalanceButtonText: {
    fontFamily: FONTS.text,
    fontSize: 16,
    color: "#fff"
  }
})