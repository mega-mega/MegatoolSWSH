import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PartyChoiceScreen from "./src/screens/PartyChoiceScreen";
import SettingScreen from "./src/screens/SettingScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({})}
        tabBarOptions={{
          activeTintColor: "#8C7851",
          inactiveTintColor: "#EADDCF",
          //activeBackgroundColor: '#8C7851',

          showLabel: true,
          // labelStyle: {
          //   fontFamily: FontName.Black,
          // },
        }}
      >
        <Tab.Screen name="Home" component={SettingScreen} />
        <Tab.Screen name="Settings" component={PartyChoiceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
