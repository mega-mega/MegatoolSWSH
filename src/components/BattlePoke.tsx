import React from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import palet from "../../common/palet.json";
const ball = require("../../assets/icon.png");

/**
 * パーティ選択で表示される1つ分のポケモンカード
 */
export const BattlePoke = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: "40%", flexDirection: "row" }}>
        <View style={styles.imageArea}>
          <Image source={ball} style={styles.image} resizeMode={"contain"} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.nameStyle}>ウーラオス(いちげき)</Text>
          <Text style={styles.nameStyle}>ASようき</Text>
        </View>
      </View>
      <View style={styles.textArea}>
        <View style={{ height: "33%", flexDirection: "row" }}>
          <View style={styles.infoArea}>
            <Text style={styles.infoText}>とくせい</Text>
          </View>
          <View style={styles.infoArea}>
            <Text style={styles.infoText}>もちもの</Text>
          </View>
        </View>
        {/* わざ1列 */}
        <View style={{ height: "33%", flexDirection: "row" }}>
          <View style={styles.infoArea}>
            <Text style={styles.infoText}>わざ1</Text>
          </View>
          <View style={styles.infoArea}>
            <Text style={styles.infoText}>わざ2</Text>
          </View>
        </View>
        {/* わざ2列 */}
        <View style={{ height: "33%", flexDirection: "row" }}>
          <View style={styles.infoArea}>
            <Text style={styles.infoText}>わざ3</Text>
          </View>
          <View style={styles.infoArea}>
            <Text style={styles.infoText}>わざ4</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet.back,
    margin: 1,
    flexDirection: "column",
    position: "relative",
    padding: 1,
  },
  textArea: {
    height: "60%",
    width: "100%",
    backgroundColor: palet.back,
    flexDirection: "column",
    borderWidth: 1,
  },
  nameStyle: {
    fontSize: 14,
    marginLeft: 5,
    color: palet.text,
    // fontWeight: "bold",
  },
  infoArea: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    width: "50%",
    fontSize: 10,
    color: palet.text,
  },
  imageArea: {
    width: "18%",
    height: "100%",
    paddingBottom: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    borderRadius: 1,
  },
});

export default BattlePoke;
