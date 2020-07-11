import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>かべかけ!</Text>
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

export default SettingScreen;
