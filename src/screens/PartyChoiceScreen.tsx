import React, { useState } from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PartyTab from "../components/PartyTab";

export const PartyChoiceScreen = () => {
  return (
    <View style={styles.container}>
      <PartyTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default PartyChoiceScreen;
