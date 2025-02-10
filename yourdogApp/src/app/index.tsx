import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { router } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");

  function trocaPagina() {
    router.navigate("/dashboard");
  }

  function onChangeText(text: string) {
    setName(text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OLA, {name}</Text>

      <Input onChangeText={setName} />

      <Button title="entrar" onPress={trocaPagina} activeOpacity={0.3} />
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
