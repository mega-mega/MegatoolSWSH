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
          <Text style={styles.pokeName}>ウーラオス</Text>
        </View>
        {/* 特性　アイテム、NN、種族名 */}

        <View style={styles.pokeInfo}>
          <Text style={styles.pokeNN}>NN: ASようき</Text>
          <Text style={styles.pokeNN}>特性: さめはだ</Text>
          <Text style={styles.pokeNN}>持ち物: いのちのたま</Text>
        </View>
      </View>
      <View style={styles.wazaArea}>
        <View style={styles.wazaLeft}>
          <Text style={styles.waza}>ハイドロポンプ</Text>
          <Text style={styles.waza}>れいとうビーム</Text>
          <Text style={styles.waza}>ハイドロポンプ</Text>
          <Text style={styles.waza}>れいとうビーム</Text>
        </View>
        <View style={styles.wazaLeft}>
          <Text style={styles.waza}>みがわり</Text>
          <Text style={styles.waza}>あくのはどう</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "12%",
    width: "100%",
    flexDirection: "row",
    marginBottom: 2,
  },
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
    width: "20%",
    height: "80%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 1,
  },
  typeArea: {
    height: "80%%",
    width: "10%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 1,
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
    flexDirection: "row",
  },
  wazaRight: {
    width: "50%",
    height: "100%",
    margin: 2,
    backgroundColor: "white",
  },
  wazaLeft: {
    width: "50%",
    height: "100%",
    margin: 2,
    backgroundColor: "green",
  },
  waza: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 11,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 5,
  },
  pokeName: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  pokeNN: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 5,
  },
});
export default PokeListItem;
