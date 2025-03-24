import { StyleSheet } from "react-native";
import { styles } from "../input/styles";

export const s = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#291C0F",
    justifyContent: "center",
    flexDirection: "row", // Alinha horizontalmente
    alignItems: "center",
    padding: 35,
    marginBottom: 0,
  },
  container2: {
    height: 50,
    width: "100%",
    backgroundColor: "#FBC5AC",
    justifyContent: "center",
    flexDirection: "row", // Alinha horizontalmente
    alignItems: "center",
    padding: 35,
    marginBottom: 0,
  },

  imagem: {
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
  },
});
