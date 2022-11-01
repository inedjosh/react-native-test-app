import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import BodyText from "./BodyText";
import SmallText from "./SmallText";
import Wrapper from "./Wrapper";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/color";

const UsersList = ({ users, navigation }) => {
  const displayUsers = (user) => {
    console.log(user.item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("LocationScreen")}
        style={styles.view}
      >
        <View style={styles.subDiv}>
          <Image
            source={{ uri: user.item.imageUrl }}
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
          <View style={styles.textDiv}>
            <BodyText>{user.item.name}</BodyText>
            <SmallText>{user.item.orders} orders completed</SmallText>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={25} color={colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <Wrapper>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={displayUsers}
      />
    </Wrapper>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  subDiv: {
    flexDirection: "row",
    alignItems: "center",
  },
  textDiv: {
    paddingLeft: 15,
    justifyContent: "space-between",
    height: 50,
    flexDirection: "column",
  },
});
