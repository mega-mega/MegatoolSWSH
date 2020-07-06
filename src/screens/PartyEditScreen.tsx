import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const PartyEditScreen = () => {
  return (
    <View style={styles.container}>
      <Text>party edit !</Text>
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

export default PartyEditScreen;
