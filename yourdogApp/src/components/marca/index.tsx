import { View, Text, Image } from "react-native";

import { s } from "./styles";
import Svg, { Path } from "react-native-svg";

export function Marca() {
  return (
    <View style={s.container}>
      <Image
        source={require("../../../assets/images/tituloMarca.png")}
        style={s.imagem}
      />
    </View>
  );
}
