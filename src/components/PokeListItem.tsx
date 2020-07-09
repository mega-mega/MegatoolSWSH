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
          {/* タイプエリア */}
          <View style={styles.typeArea}>
            <Image
              source={ball}
              style={styles.typeImage}
              resizeMode={"contain"}
            />
            <Image
              source={ball}
              style={styles.typeImage}
              resizeMode={"contain"}
            />
          </View>
        </View>
        {/* 特性　アイテム、NN、種族名 */}
        <View style={styles.pokeInfo}></View>
      </View>
      <View style={styles.wazaArea}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 130, flexDirection: "row", marginBottom: 2 },
  pokeInfoArea: {
    width: "50%",
    height: "100%",
    backgroundColor: palet.sub,
  },
  imageArea: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
  },
  image: {
    width: "25%",
    height: "80%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 3,
  },
  typeArea: {
    height: "80%%",
    width: "20%",
    marginTop: "auto",
    marginBottom: "auto",
  },
  typeImage: {
    width: "80%",
    height: "45%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
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
