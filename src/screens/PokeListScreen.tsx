import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import CircleButton from "../elements/CircleButton";
import palet from "../../common/palet.json";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import PokeEditScreen from "./PokeEditScreen";
import PokeListItem from "../components/PokeListItem";
import { PokeType } from "../../common/PokeType";
import AppState from "../states/AppState";
import State from "../State";
import {
  createUpdateMessageAction,
  createUpdatePokeAction,
} from "../actions/AppAction";
const Stack = createStackNavigator();

interface Events {}

interface Props extends Events, AppState {}
export const PokeListScreen = (props: Props) => {
  const clickSave = () => {
    // TODO: props.pokeDataで保存処理書く
  };
  return (
    <Stack.Navigator screenOptions={headerOption}>
      <Stack.Screen name="一覧" component={ListView} />
      <Stack.Screen
        name="追加"
        options={{
          headerRight: () => {
            return (
              <Icon
                name="save"
                type="font-awesome"
                color={palet.back}
                style={{ marginRight: 20 }}
                onPress={clickSave}
              />
            );
          },
        }}
      >
        {() => <PokeEditScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
const headerOption = {
  headerStyle: {
    backgroundColor: palet.main,
  },
  headerTintColor: palet.back,
  headerTitleStyle: {
    // fontWeight: "bold",
  },
};

const ListView = (props: any) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <PokeListItem />
      <PokeListItem />
      <PokeListItem />
      <PokeListItem />
      <PokeListItem />
      <PokeListItem />
      <CircleButton
        onPress={() => {
          navigation.navigate("追加");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
const mapStateToProps = (state: State): AppState => {
  return {
    message: state.app.message,
    pokeData: state.app.pokeData,
  };
};

export default connect(mapStateToProps, undefined)(PokeListScreen);
