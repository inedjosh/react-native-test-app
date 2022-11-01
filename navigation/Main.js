import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTab from "./Tabs";
import Users from "../screens/Users";
import Location from "../screens/Location";

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabs" component={MyTab} />
      <Stack.Screen name="UsersScreen">
        {(props) => <Users {...props} />}
      </Stack.Screen>
      <Stack.Screen name="LocationScreen">
        {(props) => <Location {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
