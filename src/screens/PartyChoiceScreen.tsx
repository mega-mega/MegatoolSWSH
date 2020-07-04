import React, { useState } from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BattlePoke from "../components/BattlePoke";
const Tab = createMaterialTopTabNavigator();
export const PartyChoiceScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BattlePoke} />
      <Tab.Screen name="Settings" component={BattlePoke} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
export default PartyChoiceScreen;
