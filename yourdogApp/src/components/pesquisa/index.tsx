import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function Pesquisa() {
  return (
    <View style={styles.pesquisa}>
      <TextInput
        style={styles.pesquisaInput}
        placeholder="Pesquisar..."
        placeholderTextColor="#888"
      />
    </View>
  );
}
