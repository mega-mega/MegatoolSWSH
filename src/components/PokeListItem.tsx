import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import palet from "../../common/palet.json";
import { PokeType } from "../../common/PokeType";

const ball = require("../../assets/icon.png");

interface Props {
  itemData?: PokeType;
  onClick?: (pokeData: PokeType) => void;
  onLongClick?: (pokeData: PokeType) => void;
}

export const PokeListItem = (props: Props) => {
  const data: PokeType = props.itemData
    ? props.itemData!
    : {
        hash: "",
        name: "no name",
        nn: "nickname",
        ability: "",
        pokesonality: "",
        item: "",
        waza: { 0: "", 1: "", 2: "", 3: "" },
        status: {
          bs: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
          iv: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
          ev: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
          st: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        },
        memo: "",
        createAt: new Date(),
        updateAt: new Date(),
      };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (props.onClick) {
          props.onClick(data);
        }
      }}
      onLongPress={() => {
        if (props.onLongClick) {
          props.onLongClick(data);
        }
      }}
    >
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
          <View style={styles.pokeNameArea}>
            <Text style={styles.pokeName}>{data.name}</Text>
          </View>
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
          <View style={[styles.wazaBack, styles.underline]}>
            <Text style={styles.wazaText}>{data.waza?.[0]}</Text>
          </View>
          <View style={[styles.wazaBack, styles.underline]}>
            <Text style={styles.wazaText}>{data.waza?.[1]}</Text>
          </View>
          <View style={[styles.wazaBack, styles.underline]}>
            <Text style={styles.wazaText}>{data.waza?.[2]}</Text>
          </View>
          <View style={[styles.wazaBack, styles.underline]}>
            <Text style={styles.wazaText}>{data.waza?.[3]}</Text>
          </View>
        </View>
        {/* ステータス画面　努力値と実数値（余裕あれば種族値表示したい） */}
        <View style={styles.wazaLeft}>
          <Text style={styles.wazaText}>みがわり</Text>
          <Text style={styles.wazaText}>あくのはどう</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    padding: 3,
    borderRadius: 10,
    backgroundColor: palet.main,
    shadowColor: palet.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },
  pokeInfoArea: {
    width: "50%",
    height: "100%",
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
  },
  wazaArea: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
  },
  wazaRight: {
    width: "50%",
    height: "100%",
  },
  wazaLeft: {
    width: "50%",
    height: "100%",
  },
  underline: {
    borderBottomColor: palet.text,
    borderBottomWidth: 0.2,
  },
  wazaBack: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 10,
    marginRight: 10,
  },
  wazaText: {
    color: palet.text,
    fontWeight: "600",
    fontSize: 11,
    marginTop: "auto",
    marginBottom: "auto",
    textAlign: "center",
  },
  pokeName: {
    color: palet.text,
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
  },
  pokeNameArea: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 3,
    marginRight: 3,
    width: 120,
    borderBottomColor: palet.text,
    borderBottomWidth: 0.5,
    borderColor: "white",
    alignItems: "center",
  },
  pokeNN: {
    color: palet.text,
    fontWeight: "300",
    fontSize: 12,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 5,
  },
});
export default PokeListItem;
