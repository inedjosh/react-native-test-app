import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import BodyText from "../components/BodyText";
import HeadingText from "../components/HeadingText";
import UsersList from "../components/UsersList";
import Wrapper from "../components/Wrapper";
import { colors } from "../constants/color";
import { firebase } from "../utils/firebase";

const Users = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        firebase.getOnSnapShot(
          firebase.setCol(firebase.db, "users"),
          (querySnapshot) => {
            const usersArr = [];
            querySnapshot.forEach((doc) => {
              usersArr.push({ ...doc.data(), id: doc.id });
            });
            setUsers(usersArr);
          }
        );
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <View style={styles.view}>
        <View style={styles.alignDiv}>
          <HeadingText>User Collection</HeadingText>
          <BodyText style={styles.greenText}>{users.length} users</BodyText>
        </View>
        {users.length === 0 ? (
          <View style={{ paddingTop: 200 }}>
            <ActivityIndicator size={"large"} color={colors.white} />
          </View>
        ) : (
          <UsersList users={users} navigation={navigation} />
        )}
      </View>
    </Wrapper>
  );
};

export default Users;

const styles = StyleSheet.create({
  view: {
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
  },
  greenText: {
    color: colors.pryGreen,
  },
  alignDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    alignItems: "center",
  },
});
