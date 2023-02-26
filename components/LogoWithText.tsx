import React from "react";
import { View, Image } from "react-native";

interface LogoWithTextProps {
  width: number;
  height: number;
}

function LogoWithText({ width, height }: LogoWithTextProps) {
  return (
    <View>
      <Image
        source={require("../assets/full.png")}
        style={{
          width,
          height,
        }}
      />
    </View>
  );
}

export default LogoWithText;
