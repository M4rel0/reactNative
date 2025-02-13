import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s } from "@/components/scrollbaixo/card/headercard/styles";
import Entypo from "@expo/vector-icons/Entypo";

export function Headercard() {
  return (
    <View style={s.container}>
      <View style={s.perf}></View>
      <View style={s.textContainer}>
        <Text style={s.nome}>marcelo de souza luciani</Text>
        <Text style={s.raca}>chihuahua</Text>
      </View>
      <View style={s.icon}>
        <Entypo
          style={s.iconP}
          name="dots-three-vertical"
          size={27}
          color="black"
        />
      </View>
    </View>
  );
}
