import React from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import palet from "../../common/palet.json";
const ball = require("../../assets/icon.png");

export const PokeListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pokeInfoArea}>
        <View style={styles.imageArea}>
          <Image source={ball} style={styles.image} resizeMode={"contain"} />
        </View>
        {/* 特性　アイテム、NN、種族名 */}
        <View style={styles.pokeInfo}></View>
      </View>
      <View style={styles.wazaArea}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 150, flexDirection: "row", marginBottom: 2 },
  pokeInfoArea: {
    width: "50%",
    height: "100%",
    backgroundColor: palet.sub,
  },
  imageArea: {
    width: "100%",
    height: "40%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  image: {
    width: "25%",
    height: "100%",
    borderRadius: 1,
    // margin: 3
  },
  pokeInfo: {
    width: "100%",
    height: "60%",
    backgroundColor: "red",
  },
  wazaArea: {
    width: "50%",
    height: "100%",
    backgroundColor: "gray",
  },
});
export default PokeListItem;
