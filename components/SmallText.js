import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../constants/color";

const SmallText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default SmallText;

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
    fontFamily: "medium",
    textTransform: "capitalize",
    fontSize: 12,
  },
});
