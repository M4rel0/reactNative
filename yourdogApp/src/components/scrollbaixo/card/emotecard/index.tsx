import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { s } from "@/components/scrollbaixo/card/emotecard/styles";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Emotecard() {
  return (
    <View style={s.container}>
      <View style={s.iconsCC}>
        <Octicons style={s.iconsC} name="heart" size={35} color="black" />
        <Ionicons
          style={s.iconsC}
          name="chatbubble-outline"
          size={35}
          color="black"
        />
      </View>
      <Entypo
        style={s.iconP}
        name="dots-three-vertical"
        size={30}
        color="black"
      />
    </View>
  );
}
