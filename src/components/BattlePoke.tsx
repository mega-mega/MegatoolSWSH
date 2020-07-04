import React from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
const ball = require("../../assets/ball_sample.jpg");
export const BattlePoke = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image source={ball} style={styles.image} resizeMode={"contain"} />
      </View>
      <View style={styles.textArea}>
        <Text>ガブリアス</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0",
    margin: 1,
    flexDirection: "row",
    position: "relative",
  },
  textArea: {
    height: "25%",
    width: "40%",
    backgroundColor: "red",
  },
  textStyle: {
    alignContent: "center",
    textAlign: "center",
  },
  imageArea: {
    width: "20%",
    height: "100%",

    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
});

export default BattlePoke;
