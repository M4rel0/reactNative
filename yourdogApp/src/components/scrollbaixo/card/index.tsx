import { View, Text } from "react-native";

import { s } from "@/components/scrollbaixo/card/styles";
import { Headercard } from "./headercard";
import { Imgcard } from "./imgcard";
import { Emotecard } from "./emotecard";
export function Card() {
  return (
    <View style={s.container}>
      <Headercard />

      <Imgcard />
      <Emotecard />
    </View>
  );
}
