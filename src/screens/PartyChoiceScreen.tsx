import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";
import PartyTab from "../components/PartyTab";
import palet from "../../common/palet.json";
import { Banner } from "../elements/Banner";

/**
 * 6匹のデータを保持する、
 * DB更新と
 * stack navigatorのgoBack抱えた関数を用意して渡す
 * reduxでバトルボックス保持する
 */
interface Props {}
export const PartyChoiceScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Banner />
      <PartyTab onClick={navigateInfo(props)} />
      <Button title="対戦開始" onPress={() => {}} />
    </View>
  );
};

const navigateInfo = (navigationProps: any) => {
  // const { navigation } = navigationProps;
  // navigation.navigate("詳細画面");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet.back,
  },
  iconStyle: {
    color: palet.back,
    marginRight: 10,
  },
});
export default PartyChoiceScreen;
