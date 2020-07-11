import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PartyChoiceScreen from "./src/screens/PartyChoiceScreen";
import SettingScreen from "./src/screens/SettingScreen";
import PokeListScreen from "./src/screens/PokeListScreen";
import palet from "./common/palet.json";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({})}
          tabBarOptions={{
            activeTintColor: "#8C7851",
            inactiveTintColor: "#EADDCF",
            //activeBackgroundColor: '#8C7851',
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet.back,
  },
});
