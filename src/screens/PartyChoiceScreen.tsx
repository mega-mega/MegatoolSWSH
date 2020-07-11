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
import { AdMobBanner } from "expo-ads-admob";
import { Icon } from "react-native-elements";
import PartyTab from "../components/PartyTab";
import palet from "../../common/palet.json";

export const PartyChoiceScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "パーティ選択",
          style: { color: palet.back, fontSize: 16 },
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              console.log("click");
            }}
          >
            <Icon
              name={"exchange-alt"}
              color={"black"}
              size={20}
              type={"font-awesome-5"}
              iconStyle={styles.iconStyle}
            />
          </TouchableOpacity>
        }
        backgroundColor={palet.main}
      />
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={true} // true or false
        // onDidFailToReceiveAdWithError={this.bannerError}
        style={{ marginBottom: 3, marginTop: 3 }}
      />
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
