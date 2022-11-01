import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../constants/color";

const HeadingText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: "spaceBold",
    fontSize: 24,
    textTransform: "capitalize",
  },
});
