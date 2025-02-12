import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import Loader from "@/components/teste";
import { Marca } from "@/components/marca"; // Adjust the import path as necessary

export default function Index() {
  const [name, setName] = useState("");

  function onChangeText(text: string) {
    setName(text);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Marca />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf2d9",
    padding: 32,
    justifyContent: "center",
    gap: 10,
  },
  title: {
    color: "red",
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
