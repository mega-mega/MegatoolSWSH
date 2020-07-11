import React from "react";
import { StyleProp } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

interface Props {
  style?: StyleProp<any>;
}
export const Banner = (props: Props) => {
  return (
    <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds={true} // true or false
      // onDidFailToReceiveAdWithError={this.bannerError}
      style={[{ marginBottom: 3, marginTop: 3 }, props.style]}
    />
  );
};
