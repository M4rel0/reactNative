import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.gray[500],
        tabBarInactiveTintColor: colors.gray[100], //
      }}
    >
      <Tabs.Screen
        name="notificacao"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={24} color="black" />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tabs.Screen
        name="mensagem"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" size={24} color="black" />
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="menutind"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="fire-alt" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="pesquisa"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="at-circle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
