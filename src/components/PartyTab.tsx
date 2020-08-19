import React, { useState } from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import palet from "../../common/palet.json";
import BattlePoke from "../components/BattlePoke";

/**
 * パーティ選択のタブを生成（ひとまず5個くらい
 * たくさん作る場合は可変長だと見通し悪そう。。
 */
export const PartyTab = () => {
  return (
    <View style={styles.container}>
      <BattleInfo />
    </View>
  );
};

const BattleInfo = () => {
  return (
    <View style={styles.battleMenu}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>チーム名: </Text>
        <Text>バトルボックス1</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>対戦成績: </Text>
        <Text>10戦 7勝 (70%)</Text>
      </View>
      <BattleBox />
    </View>
  );
};

const BattleBox = () => {
  return (
    <View style={{ flex: 1, borderColor: "#000", borderWidth: 1 }}>
      <View style={styles.boxRow}>
        <BattlePoke />
        <BattlePoke isRight={true} />
      </View>
      <View style={styles.boxRow}>
        <BattlePoke />
        <BattlePoke isRight={true} />
      </View>
      <View style={styles.boxRow}>
        <BattlePoke />
        <BattlePoke isRight={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet.back,
  },
  boxRow: {
    height: "35%",
    flexDirection: "row",
  },
  battleMenu: {
    backgroundColor: palet.back,
    height: "70%",
  },
  text: { marginLeft: "10%", fontSize: 16 },
});
export default PartyTab;
