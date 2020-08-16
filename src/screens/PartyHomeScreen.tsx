import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import palet from "../../common/palet.json";
import PartyChoiceScreen from "./PartyChoiceScreen";
import PartyEditScreen from "./PartyEditScreen";
import PartyListScreen from "./PartyListScreen";

const Stack = createStackNavigator();
interface Props {}
export const PartyHomeScreen = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={headerOption}>
      <Stack.Screen
        name="対戦準備"
        options={{
          header: ({ scene, previous, navigation }) => {
            return (
              <Header
                centerComponent={{
                  text: "対戦準備",
                  style: { color: palet.text, fontSize: 16 },
                }}
                rightComponent={
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("バトルボックス一覧");
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={[styles.text, { marginRight: 10 }]}>
                        切替
                      </Text>
                      <Icon
                        name={"exchange-alt"}
                        color={palet.text}
                        size={20}
                        type={"font-awesome-5"}
                        style={{ marginRight: 5 }}
                      />
                    </View>
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
          header: ({ scene, previous, navigation }) => {
            return (
              <Header
                centerComponent={{
                  text: "バトルボックス一覧",
                  style: { color: palet.text, fontSize: 16 },
                }}
                backgroundColor={palet.main}
                leftComponent={
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Icon
                        name="angle-left"
                        type="font-awesome"
                        color={palet.text}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.text}>一覧</Text>
                    </View>
                  </TouchableOpacity>
                }
              />
            );
          },
        }}
        component={PartyListScreen}
      />
      <Stack.Screen
        name="バトルボックス編集"
        options={{
          header: () => {
            return (
              <Header
                centerComponent={{
                  text: "バトルボックス編集",
                  style: { color: palet.text, fontSize: 16 },
                }}
                backgroundColor={palet.main}
              />
            );
          },
        }}
        component={PartyEditScreen}
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
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: palet.text,
  },
});
export default PartyHomeScreen;
