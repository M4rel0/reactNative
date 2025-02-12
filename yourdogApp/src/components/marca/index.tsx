import { View, Text, Image } from "react-native";

import { s } from "./styles";
import Svg, { Path } from "react-native-svg";

export function Marca() {
  return (
    <View style={s.container}>
      <Image
        source={require("../../../assets/images/YourDog.svg")}
        style={s.imagem}
      />
    </View>
  );
}
interface MyIconProps {
  color: string;
}

const MyIcon = ({ color }: MyIconProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill={color}
    />
  </Svg>
);

export default MyIcon;
