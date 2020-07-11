import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const names = ["ガブリアス", "フライゴン", "ピカチュウ"];
export const PokeEditScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>name: </Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View>
        <Text>ニックネーム: </Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ width: "50%", paddingRight: 5 }}>
          <Text>特性: </Text>
          <TextInput
            style={styles.abilityInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 5 }}>
          <Text>持ち物: </Text>
          <TextInput
            style={styles.abilityInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
      {/* 技エリア */}
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ width: "50%", paddingRight: 5 }}>
          <Text>わざ1: </Text>
          <TextInput
            style={styles.abilityInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 5 }}>
          <Text>わざ2: </Text>
          <TextInput
            style={styles.abilityInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ width: "50%", paddingRight: 5 }}>
          <Text>わざ3: </Text>
          <TextInput
            style={styles.abilityInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 5 }}>
          <Text>わざ4: </Text>
          <TextInput
            style={styles.abilityInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    paddingTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
  nameInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
  abilityInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default PokeEditScreen;
