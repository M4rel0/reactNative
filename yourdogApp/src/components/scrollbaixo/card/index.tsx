import { View, Text } from "react-native";

import { s } from "@/components/scrollbaixo/card/styles";
import { Headercard } from "./headercard";

export function Card() {
  return (
    <View style={s.container}>
      <Headercard />
    </View>
  );
}
