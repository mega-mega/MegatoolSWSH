import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";
import CircleButton from "../elements/CircleButton";
import palet from "../../common/palet.json";
import { createStackNavigator } from "@react-navigation/stack";
import PokeEditScreen from "./PokeEditScreen";
import PokeListItem from "../components/PokeListItem";

const Stack = createStackNavigator();
const headerOption = {
  headerStyle: {
    backgroundColor: palet.main,
  },
  headerTintColor: palet.back,
  headerTitleStyle: {
    // fontWeight: "bold",
  },
};
export const PokeListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="一覧" component={ListView} options={headerOption} />
      <Stack.Screen
        name="追加"
        component={PokeEditScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
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

export default PokeListScreen;
