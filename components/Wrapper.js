import React from "react";
import { SafeAreaView, View } from "react-native";
import { colors } from "../constants/color";

const Wrapper = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.pryBg, flex: 1 }}>
      <View style={{ flex: 1 }}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Wrapper;
