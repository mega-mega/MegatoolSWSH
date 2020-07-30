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

export const PartyChoiceScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "パーティ選択",
          style: { color: palet.text, fontSize: 16 },
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              console.log("click");
            }}
          >
            <Icon
              name={"exchange-alt"}
              color={palet.text}
              size={20}
              type={"font-awesome-5"}
              iconStyle={styles.iconStyle}
            />
          </TouchableOpacity>
        }
        backgroundColor={palet.main}
      />
      <Banner />
      <PartyTab />
      <Button title="対戦開始" onPress={() => {}} />
    </View>
  );
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
