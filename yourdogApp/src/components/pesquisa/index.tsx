import React from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export function Pesquisa() {
  return (
    <View style={styles.pesquisa}>
      <View style={styles.innerShadow}>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0)"]}
          style={styles.gradientOverlay}
        />
        <TextInput
          style={styles.pesquisaInput}
          placeholder="Pesquisar..."
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.filtros}></View>
    </View>
  );
}
