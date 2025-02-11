import { Tabs } from "expo-router";
import { colors } from "@/styles/colors";
import { ImageBackground } from "react-native";

export default function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.gray[800],
        },
      }}
    />
  );
}
