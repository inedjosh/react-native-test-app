import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { MainStack } from "./navigation/Main";

export default function App() {
  const [loaded] = useFonts({
    black: require("./assets/fonts/CoreSansG-Bold.ttf"),
    medium: require("./assets/fonts/CoreSansG-Medium.ttf"),
    regular: require("./assets/fonts/CoreSansG-Regular.ttf"),
    spaceBold: require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    spaceMedium: require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  // console.log(JSON.stringify(uriData));

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <MainStack />
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
