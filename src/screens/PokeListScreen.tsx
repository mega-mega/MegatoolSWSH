import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";
import CircleButton from "../elements/CircleButton";
import palet from "../../common/palet.json";
import { createStackNavigator } from "@react-navigation/stack";
import PokeEditScreen from "./PokeEditScreen";

const Stack = createStackNavigator();

export const PokeListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="一覧" component={ListView} />
      <Stack.Screen name="追加" component={PokeEditScreen} />
    </Stack.Navigator>
  );
};

const ListView = (props: any) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      {/* <Header
        centerComponent={{
          text: "ポケモン管理",
          style: { color: palet.back, fontSize: 16 },
        }}
        backgroundColor={palet.main}
      /> */}
      <Text style={{ flex: 1 }}>pokelist !</Text>
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
