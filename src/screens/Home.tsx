import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import palet from "../../common/palet.json";
import { login } from "../repository/FireStore";
import AppState from "../states/AppState";
import PartyChoiceScreen from "./PartyChoiceScreen";
import PokeListScreen from "./PokeListScreen";
import SettingScreen from "./SettingScreen";
const Tab = createBottomTabNavigator();

interface Events {}

interface Props extends Events, AppState {}
export const Home = (props: Props) => {
  login();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({})}
          tabBarOptions={{
            activeTintColor: "#8C7851",
            inactiveTintColor: "#EADDCF",
            // activeBackgroundColor: '#8C7851',
            showLabel: true,
            // labelStyle: {
            //   fontFamily: FontName.Black,
            // },
          }}
        >
          <Tab.Screen name="対戦" component={PartyChoiceScreen} />
          <Tab.Screen name="管理" component={PokeListScreen} />
          <Tab.Screen name="設定" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet.back,
  },
});
export default Home;
