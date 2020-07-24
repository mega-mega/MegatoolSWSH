import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { PokeType } from "../../common/PokeType";
import { createUpdatePokeAction } from "../actions/AppAction";
import StatusTable from "../components/StatusTable";
import { Banner } from "../elements/Banner";
import State from "../State";
import AppState from "../states/AppState";
import Hashids from "hashids";

interface Events {
  // ポケモンリストと1個体分のイベント作る
  onChangePokemon: (pokeData: PokeType) => void;
}

interface Props extends Events, AppState {
  pokeProp?: PokeType;
  updateAt: Date;
}

const getUniqueHash = (createAt: Date) => {
  const hashids = new Hashids();
  return hashids.encode(createAt.getTime());
};

export class PokeEditScreen extends React.Component<Props, {}> {
  pokeData: PokeType = {};
  constructor(props: any) {
    super(props);
    this.pokeData = props.pokeProp
      ? props.pokeData!
      : {
          hash: getUniqueHash(props.updateAt),
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
          createAt: props.updateAt,
          updateAt: props.updateAt,
        };
    this.pokeData.updateAt = props.updateAt;
    // FIXME: propsが無限に更新されてしまう、関数切り出しして一度だけ呼ばれるように修正
    if (props.pokeData && props.pokeData.createAt !== props.updateAt) {
      console.log("init");
      console.log(props.pokeData.hash);
      console.log(this.pokeData.hash);
      props.onChangePokemon(this.pokeData);
    }
  }

  // 技入力エリア1つ
  wazaInput = (waza: string, index: number) => {
    return (
      <View>
        <Text>{waza}</Text>
        <TextInput
          style={styles.abilityInput}
          onChangeText={(text) => {
            this.pokeData.waza![index] = text;
            this.props.onChangePokemon(this.pokeData);
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View>
            <Text>name: </Text>
            <TextInput
              style={styles.nameInput}
              value={this.props.pokeData?.name}
              onChangeText={(text) => {
                this.pokeData.name = text;
                this.props.onChangePokemon(this.pokeData);
              }}
            />
          </View>
          <View>
            <Text>ニックネーム: </Text>
            <TextInput
              style={styles.nameInput}
              onChangeText={(text) => {
                this.pokeData.nn = text;
                this.props.onChangePokemon(this.pokeData);
              }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{ width: "50%", paddingRight: 5 }}>
              <Text>特性: </Text>
              <TextInput
                style={styles.abilityInput}
                onChangeText={(text) => {
                  this.pokeData.ability = text;
                  this.props.onChangePokemon(this.pokeData);
                }}
              />
            </View>
            <View style={{ width: "50%", paddingLeft: 5 }}>
              <Text>持ち物: </Text>
              <TextInput
                style={styles.abilityInput}
                onChangeText={(text) => {
                  this.pokeData.item = text;
                  this.props.onChangePokemon(this.pokeData);
                }}
              />
            </View>
          </View>
          {/* 技エリア */}
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{ width: "50%", paddingRight: 5 }}>
              {this.wazaInput("わざ1: ", 0)}
            </View>
            <View style={{ width: "50%", paddingLeft: 5 }}>
              {this.wazaInput("わざ2: ", 1)}
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={{ width: "50%", paddingRight: 5 }}>
              {this.wazaInput("わざ3: ", 2)}
            </View>
            <View style={{ width: "50%", paddingLeft: 5 }}>
              {this.wazaInput("わざ4: ", 3)}
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
                this.pokeData.memo = text;
                this.props.onChangePokemon(this.pokeData);
              }}
            />
          </View>
        </ScrollView>
        <Banner style={styles.banner} />
      </View>
    );
  }
}

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
