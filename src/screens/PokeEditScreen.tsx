import React from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import StatusTable from "../components/StatusTable";
import { Banner } from "../elements/Banner";
import { PokeType } from "../../common/PokeType";
import AppState from "../states/AppState";
import State from "../State";
import { createUpdatePokeAction } from "../actions/AppAction";

interface Events {
  // ポケモンリストと1個体分のイベント作る

  onChangePokemon: (pokeData: PokeType) => void;
}

interface Props extends Events, AppState {
  pokeProp?: PokeType;
}

export const PokeEditScreen = (props: Props) => {
  const pokeData: PokeType = props.pokeProp || {
    number: 0,
    name: "ガブリアス",
    nn: "陽気スカーフ",
    ability: "さめはだ",
    pokesonality: "ようき",
    item: "こだわりスカーフ",
    waza: ["", "", "", ""],
    status: {
      bs: [0, 0, 0, 0, 0, 0],
      iv: [0, 0, 0, 0, 0, 0],
      ev: [0, 0, 0, 0, 0, 0],
      st: [0, 0, 0, 0, 0, 0],
    },
    memo: "",
    createAt: new Date(),
    updateAt: new Date(),
  };
  // 技入力エリア1つ
  const wazaInput = (waza: string, index: number) => {
    return (
      <View>
        <Text>{waza}</Text>
        <TextInput
          style={styles.abilityInput}
          onChangeText={(text) => {
            pokeData.waza[index] = text;
            props.onChangePokemon(pokeData);
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View>
          <Text>name: </Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={(text) => {
              pokeData.name = text;
              props.onChangePokemon(pokeData);
            }}
          />
        </View>
        <View>
          <Text>ニックネーム: </Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={(text) => {
              pokeData.nn = text;
              props.onChangePokemon(pokeData);
            }}
          />
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={{ width: "50%", paddingRight: 5 }}>
            <Text>特性: </Text>
            <TextInput
              style={styles.abilityInput}
              onChangeText={(text) => {
                pokeData.ability = text;
                props.onChangePokemon(pokeData);
              }}
            />
          </View>
          <View style={{ width: "50%", paddingLeft: 5 }}>
            <Text>持ち物: </Text>
            <TextInput
              style={styles.abilityInput}
              onChangeText={(text) => {
                pokeData.item = text;
                props.onChangePokemon(pokeData);
              }}
            />
          </View>
        </View>
        {/* 技エリア */}
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={{ width: "50%", paddingRight: 5 }}>
            {wazaInput("わざ1: ", 0)}
          </View>
          <View style={{ width: "50%", paddingLeft: 5 }}>
            {wazaInput("わざ2: ", 1)}
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={{ width: "50%", paddingRight: 5 }}>
            {wazaInput("わざ3: ", 2)}
          </View>
          <View style={{ width: "50%", paddingLeft: 5 }}>
            {wazaInput("わざ4: ", 3)}
          </View>
        </View>
        <StatusTable />
        <View
          style={{ marginTop: 10, backgroundColor: "gray", height: "100%" }}
        >
          <Text>備考: </Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={(text) => {
              pokeData.memo = text;
              props.onChangePokemon(pokeData);
            }}
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

const mapStateToProps = (state: State): AppState => {
  return {
    message: state.app.message,
    pokeData: state.app.pokeData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Events => {
  return {
    onChangePokemon: (pokeData: PokeType) => {
      dispatch(createUpdatePokeAction(pokeData));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PokeEditScreen);
