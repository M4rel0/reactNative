import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Marca, MarcaMarrom } from "@/components/marca";
import { useFonts } from "expo-font";

export default function Menutind() {
  return (
    <View style={styles.container}>
      <MarcaMarrom />
      <View style={styles.imgText}>
        <Image
          source={require("@/../assets/images/Encontre seu parceiro ideal faça novos Aumigo.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(131, 168, 19)",
    padding: 0,
    position: "relative",
    margin: 0,
  },
  imgText: {
    marginLeft: 50,
    marginTop: 16,
    height: 200,
    backgroundColor: "rgb(73, 79, 53)",
    position: "relative",
  },
  img: {
    position: "absolute",
  },
});
