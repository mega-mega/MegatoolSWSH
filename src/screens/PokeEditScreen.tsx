import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import StatusTable from "../components/StatusTable";
import { Banner } from "../elements/Banner";
import { pokeType } from "../../common/pokeType";

interface Props {
  pokeData?: pokeType;
}

export const PokeEditScreen = (props: Props) => {
  const [poke, setPoke] = useState(props.pokeData);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
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
        <StatusTable />
        <View
          style={{ marginTop: 10, backgroundColor: "gray", height: "100%" }}
        >
          <Text>備考: </Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </ScrollView>
      <Banner style={styles.banner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scroll: {
    width: "90%",
    paddingTop: 10,
    flex: 1,
    marginRight: "auto",
    marginLeft: "auto",
  },
  nameInput: {
    height: 30,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
  abilityInput: {
    height: 30,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
  banner: {
    position: "absolute",
    bottom: 0,
  },
});

export default PokeEditScreen;
