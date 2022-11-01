import * as React from "react";
import { Platform, Text, StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import PeopleSvg from "../svg/PeopleSvg";
import Users from "../screens/Users";
import Location from "../screens/Location";
import LocationSvg from "../svg/LocationSvg";
import { colors } from "../constants/color";

const Tab = createMaterialBottomTabNavigator();

let MyTab;

if (Platform.OS === "android") {
  MyTab = MyAndroidTabs;
} else if (Platform.OS === "ios") {
  MyTab = MyIosTabs;
}

function MyIosTabs() {
  return (
    <Tab.Navigator
      initialRouteName="UsersScreen"
      activeColor={"#ccc"}
      inactiveColor="#c0c0c0"
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: "#fff",
        paddingVertical: 5,
        fontSize: 20,
      }}
    >
      <Tab.Screen
        name="UsersScreen"
        component={Users}
        tabBarLabelStyle
        labeled={false}
        options={{
          tabBarIcon: ({ color }) => <PeopleSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="LocationScreen"
        component={Location}
        labeled={false}
        options={{
          tabBarIcon: ({ color }) => <LocationSvg color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function MyAndroidTabs() {
  return (
    <Tab.Navigator
      initialRouteName="UsersScreen"
      activeColor={colors.pryGreen}
      inactiveColor={colors.offWhite}
      labeled={false}
      shifting={false}
      barStyle={{
        backgroundColor: colors.navyBlue,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Tab.Screen
        name="UsersScreen"
        component={Users}
        labeled={false}
        options={{
          tabBarIcon: ({ color }) => <PeopleSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="LocationScreen"
        component={Location}
        labeled={false}
        options={{
          tabBarIcon: ({ color }) => <LocationSvg color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTab;

const styles = StyleSheet.create({
  text: {
    fontSize: 9,
    fontFamily: "bold",
    marginTop: 50,
    paddingTop: 5,
    position: "absolute",
    top: 10,
    color: "#000",
  },
});
