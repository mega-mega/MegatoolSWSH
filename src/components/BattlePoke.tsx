import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
export const BattlePoke = () => {
  return (
    <View style={styles.container}>
      <Text>hogehoge</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
export default BattlePoke;
