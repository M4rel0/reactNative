import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pesquisa: {
    marginTop: 21,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
  },
  innerShadow: {
    width: 374,
    height: 58,
    borderRadius: 40,
    backgroundColor: "rgba(253, 211, 192, 0.71)",
    overflow: "hidden",
    position: "relative",
  },
  pesquisaInput: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 40,
    zIndex: 1,
  },
  filtros: {},
});
