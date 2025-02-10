import { View, Text, StyleSheet } from "react-native";
import { router, Router } from "expo-router";

import { Button } from "@/components/button";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="voltar" onPress={() => router.back()} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
