import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "rgb(153, 57, 57)",
    flexDirection: "row",
  },
  perf: {
    marginTop: 7,
    marginLeft: 17,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "rgb(188, 109, 123)",
    borderWidth: 1,
    borderColor: "black",
    marginRight: 10,
  },
  textContainer: {
    height: 60,
    width: 260,
    backgroundColor: "rgb(69, 41, 195)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 0,
    padding: 0,
  },
  nome: {
    flexDirection: "column",
    color: "black",
    maxWidth: 200,
    fontSize: 17,
    fontWeight: "600",

    backgroundColor: "rgb(188, 109, 123)",
  },

  raca: {
    color: "black",
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
