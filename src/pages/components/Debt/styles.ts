import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../config";

export default StyleSheet.create({
  container: {
    paddingVertical: 22,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.darkGray,
  },

  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  name: {
    fontSize: 22,
    fontFamily: FONTS.text,
    color: "#fff"
  },

  value: {
    fontFamily: FONTS.title,
    fontSize: 18,
    color: COLORS.red
  },

  date: {
    fontSize: 14,
    fontFamily: FONTS.text,
    fontStyle: "italic",
    alignSelf: "center",
    color: COLORS.lightGray
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingTop: 8
  },

  editButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: "49%",
    paddingVertical: 12,
    borderRadius: 4
  },

  removeButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.red,
    width: "49%",
    paddingVertical: 12,
    borderRadius: 4
  }
})