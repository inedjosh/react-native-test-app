import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../constants/color";
import HeadingText from "./HeadingText";
import SmallText from "./SmallText";

const AddressBox = ({ lat, long }) => {
  return (
    <View>
      <View style={styles.box}>
        <SmallText>My Latitude</SmallText>
        <HeadingText>{lat}</HeadingText>
      </View>
      <View style={styles.box}>
        <SmallText>My longitude</SmallText>
        <HeadingText>{long}</HeadingText>
      </View>
    </View>
  );
};

export default AddressBox;

const styles = StyleSheet.create({
  box: {
    padding: 20,
    borderColor: "#112147",
    borderRadius: 12,
    backgroundColor: colors.navyBlue,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
