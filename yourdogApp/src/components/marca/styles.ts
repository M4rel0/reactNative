import { StyleSheet } from "react-native";
import { styles } from "../input/styles";

export const s = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "rgb(160, 38, 99)",
    justifyContent: "space-between",
    flexDirection: "row", // Alinha horizontalmente
    alignItems: "center",
    padding: 10,
    marginBottom: 0,
  },

  imagem: {
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
  },
  imagem2: {
    height: 24,
    display: "flex",
    alignItems: "center",
  },
});
