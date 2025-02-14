import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "rgb(30, 133, 174)",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
  },
  iconsCC: {
    height: "100%",
    width: 150,
    backgroundColor: "rgb(69, 142, 47)",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 5,
    alignContent: "center",
  },
  iconsC: {
    height: "100%",
    backgroundColor: "rgb(183, 38, 142)",
  },
  iconP: {
    backgroundColor: "rgb(179, 150, 48)",
    alignSelf: "flex-end",
    marginRight: 10,
  },
});
