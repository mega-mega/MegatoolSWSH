import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Header, Icon } from "react-native-elements";
import palet from "../../common/palet.json";
import PartyListScreen from "./PartyListScreen";
import PartyChoiceScreen from "./PartyChoiceScreen";
import { TouchableOpacity, StyleSheet } from "react-native";

const Stack = createStackNavigator();

export const PartyHomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={headerOption}>
      <Stack.Screen
        name="バトルボックス"
        options={{
          header: () => {
            return (
              <Header
                centerComponent={{
                  text: "パーティ選択",
                  style: { color: palet.text, fontSize: 16 },
                }}
                rightComponent={
                  <TouchableOpacity
                    onPress={() => {
                      // TODO: パーティ選択画面に遷移、
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
            );
          },
        }}
        component={PartyChoiceScreen}
      />
      <Stack.Screen
        name="バトルボックス一覧"
        options={{
          header: () => {
            return (
              <Header
                centerComponent={{
                  text: "バトルボックス一覧",
                  style: { color: palet.text, fontSize: 16 },
                }}
                backgroundColor={palet.main}
              />
            );
          },
        }}
        component={PartyListScreen}
      />
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
export default PartyHomeScreen;
