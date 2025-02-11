import { Text, View } from "react-native";
import { colors } from "@/styles/colors";

export default function Notificacao() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: colors.white }}>notificação</Text>
    </View>
  );
}
