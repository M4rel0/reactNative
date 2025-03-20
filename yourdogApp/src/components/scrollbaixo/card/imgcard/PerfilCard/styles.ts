import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 0,
    backgroundColor: "rgb(153, 57, 57)",
    flexDirection: "row",
    zIndex: 1,
  },
  perf: {
    marginTop: 12,
    marginLeft: 12,
    width: 54,
    height: 54,
    borderRadius: 100,
    backgroundColor: "rgb(188, 109, 123)",
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
    zIndex: 1,

    justifyContent: "center",
  },
  textContainer: {
    height: 60,
    width: 260,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 0,
    padding: 0,
    marginTop: 9,
  },
  nome: {
    flexDirection: "column",
    color: "white",
    maxWidth: 200,
    fontSize: 17,
    fontWeight: "600",

    backgroundColor: "rgb(188, 109, 123)",
  },

  raca: {
    color: "white",
    flexDirection: "column",

    backgroundColor: "rgb(188, 109, 123)",
  },
  icon: {
    backgroundColor: "rgb(43, 189, 94)",
    justifyContent: "center",

    flex: 1,
  },
  iconP: { alignSelf: "flex-end", marginRight: 10 },
});
