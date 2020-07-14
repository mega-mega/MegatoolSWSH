import React from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Icon } from "react-native-elements";
import CircleButton from "../elements/CircleButton";
import palet from "../../common/palet.json";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import PokeEditScreen from "./PokeEditScreen";
import PokeListItem from "../components/PokeListItem";
import { PokeType } from "../../common/PokeType";
import AppState from "../states/AppState";
import State from "../State";
import db, { login } from "../repository/FireStore";
const Stack = createStackNavigator();

interface Events {}

interface Props extends Events, AppState {}
export const PokeListScreen = (props: Props) => {
  const clickSave = async () => {
    // TODO: バリデーション処理欲しい
    const uid = await AsyncStorage.getItem("uid");
    const data = props.pokeData!;
    data.updateAt = new Date();
    (await db)
      .collection("userData")
      .doc(uid!)
      .collection("pokeCollection")
      .doc(data.number!.toString())
      .set(data)
      .then(() => {
        console.log("save");
      })
      .catch((error) => {
        console.log(error);
      });
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
    pokeData: state.app.pokeData,
  };
};

export default connect(mapStateToProps, undefined)(PokeListScreen);
