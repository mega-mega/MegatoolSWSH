import React from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import palet from "../../common/palet.json";
import { PokeType } from "../../common/PokeType";
const ball = require("../../assets/icon.png");

interface Props {
  itemData?: PokeType;
}

export const PokeListItem = (props: Props) => {
  const data: PokeType = props.itemData
    ? props.itemData!
    : {
        number: 1,
        name: "",
        nn: "",
        ability: "",
        pokesonality: "",
        item: "",
        waza: ["", "", "", ""],
        status: { bs: [], iv: [], ev: [], st: [] },
        memo: "",
        createAt: new Date(),
        updateAt: new Date(),
      };
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
          <Text style={styles.pokeName}>{data.name}</Text>
        </View>
        {/* 特性　アイテム、NN、種族名 */}

        <View style={styles.pokeInfo}>
          <Text style={styles.pokeNN}>NN: {data.nn}</Text>
          <Text style={styles.pokeNN}>特性: {data.ability}</Text>
          <Text style={styles.pokeNN}>持ち物: {data.item}</Text>
        </View>
      </View>
      <View style={styles.wazaArea}>
        <View style={styles.wazaLeft}>
          <Text style={styles.waza}>{data.waza![0]}</Text>
          <Text style={styles.waza}>{data.waza![1]}</Text>
          <Text style={styles.waza}>{data.waza![2]}</Text>
          <Text style={styles.waza}>{data.waza![3]}</Text>
        </View>
        {/* ステータス画面　努力値と実数値（余裕あれば種族値表示したい） */}
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
