import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { createUpdateMessageAction } from "../actions/AppAction";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import State from "../State";
import AppState from "../states/AppState";
import PartyChoiceScreen from "./PartyChoiceScreen";
import SettingScreen from "./SettingScreen";
import PokeListScreen from "./PokeListScreen";
import palet from "../../common/palet.json";
const Tab = createBottomTabNavigator();

interface Events {
  onChangeMessage: (message: string) => void;
}

interface Props extends Events, AppState {}
export const Home = (props: Props) => {
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

const mapStateToProps = (state: State): AppState => {
  return {
    message: state.app.message,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Events => {
  return {
    onChangeMessage: (message: string) => {
      dispatch(createUpdateMessageAction(message));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palet.back,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
