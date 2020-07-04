import React, { useState } from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BattlePoke from "../components/BattlePoke";
const Tab = createMaterialTopTabNavigator();
export const PartyTab = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="party1" component={BattleBox} />
        <Tab.Screen name="party2" component={BattlePoke} />
      </Tab.Navigator>
    </View>
  );
};

const BattleBox = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.boxRow}>
        <BattlePoke />
        <BattlePoke />
      </View>
      <View style={styles.boxRow}>
        <BattlePoke />
        <BattlePoke />
      </View>
      <View style={styles.boxRow}>
        <BattlePoke />
        <BattlePoke />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 300,
  },
  boxRow: {
    height: "33%",
    flexDirection: "row",
  },
});
export default PartyTab;
