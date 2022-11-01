import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../constants/color";

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: "medium",
    textTransform: "capitalize",
    fontSize: 16,
  },
});
