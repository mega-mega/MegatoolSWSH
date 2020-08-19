import React from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import palet from "../../common/palet.json";
import { TouchableOpacity } from "react-native-gesture-handler";
const ball = require("../../assets/icon.png");

/**
 * パーティ選択で表示される1つ分のポケモンカード
 */
interface Props {
  isRight?: boolean;
  click?: VoidFunction;
}
export const BattlePoke = (props: Props) => {
  const containerStyle: any[] = [styles.container];
  if (props.isRight) {
    containerStyle.push({ marginRight: 5 });
  }
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={props.click}>
        <View style={styles.imageNameArea}>
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
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet.main,
    marginLeft: 5,
    marginTop: 5,
    flexDirection: "column",
    position: "relative",
    borderRadius: 5,
    padding: 3,
  },
  imageNameArea: {
    height: "40%",
    flexDirection: "row",
    shadowColor: palet.back,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: palet.main,
    marginBottom: 2,
  },
  textArea: {
    height: "60%",
    width: "100%",

    flexDirection: "column",
  },
  nameStyle: {
    fontSize: 14,
    marginLeft: 5,
    marginTop: "auto",
    marginBottom: "auto",
    color: palet.text,
    // fontWeight: "bold",
  },
  infoArea: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: palet.text,
    borderBottomWidth: 0.5,
    marginBottom: 2,
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
