import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Autocomplete from "react-native-autocomplete-input";

const names = ["ガブリアス", "フライゴン", "ピカチュウ"];
export const PokeEditScreen = () => {
  return (
    <View style={styles.container}>
      <Text>pokeedit !</Text>
      {/* <Autocomplete
        data={names}
        renderItem={({ item, i }) => (
          <TouchableOpacity onPress={() => {}}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      /> */}
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

export default PokeEditScreen;
