import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import Loader from "@/components/teste";
import { Marca } from "@/components/marca";
import { Status } from "@/components/status";

export default function Index() {
  return (
    <View style={styles.container}>
      <Marca />

      <Status />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(131, 168, 19)",
    padding: 10,
    maxWidth: 1200,
  },
  title: {
    color: "red",
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
