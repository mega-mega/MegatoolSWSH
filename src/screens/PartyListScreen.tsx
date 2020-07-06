import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const PartyListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>pokelist !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default PartyListScreen;
