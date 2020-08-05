import Hashids from "hashids";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { logger } from "react-native-logs";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import palet from "../../common/palet.json";
import { PokeType } from "../../common/PokeType";
import { createUpdatePokeAction } from "../actions/AppAction";
import StatusTable from "../components/StatusTable";
import { Banner } from "../elements/Banner";
import State from "../State";
import AppState from "../states/AppState";

interface Events {
  // ポケモンリストと1個体分のイベント作る
  onChangePokemon: (pokeData: PokeType) => void;
}

interface Props extends Events, AppState {
  updateAt: Date;
}

const getUniqueHash = (createAt: Date) => {
  const hashids = new Hashids();
  return hashids.encode(createAt.getTime());
};
const log = logger.createLogger();
export class PokeEditScreen extends React.Component<Props, {}> {
  pokeData: PokeType = {};
  constructor(props: any) {
    super(props);
    this.pokeData =
      props.pokeData.hash && props.pokeData.hash !== ""
        ? props.pokeData!
        : {
            hash: getUniqueHash(props.updateAt),
            name: "エモンガ",
            nn: "テスト",
            ability: "せいでんき",
            pokesonality: "おくびょう",
            item: "きあいのタスキ",
            waza: { 0: "", 1: "", 2: "", 3: "" },
            status: {
              bs: { 0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0" },
              iv: { 0: "31", 1: "31", 2: "31", 3: "31", 4: "31", 5: "31" },
              ev: { 0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0" },
              st: { 0: "0", 1: "0", 2: "0", 3: "0", 4: "0", 5: "0" },
            },
            memo: "",
            createAt: props.updateAt,
            updateAt: props.updateAt,
          };
    this.pokeData.updateAt = props.updateAt;
    log.info("init");
    props.onChangePokemon(this.pokeData);
  }

  // 技入力エリア1つ
  wazaInput = (waza: string, index: 0 | 1 | 2 | 3, propsValue?: string) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{waza}</Text>
        <TextInput
          style={styles.abilityInput}
          defaultValue={propsValue}
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
          <KeyboardAwareScrollView ref={"scroll"}>
            <View style={[styles.backBoard, styles.spaceBottom]}>
              <Text style={styles.text}>名前: </Text>
              <TextInput
                style={styles.nameInput}
                placeholder={"エースバーン"}
                defaultValue={this.props.pokeData?.name}
                onChangeText={(text) => {
                  this.pokeData.name = text;
                  this.props.onChangePokemon(this.pokeData);
                }}
                autoCorrect={false}
              />
            </View>
            <View style={[styles.backBoard, styles.spaceBottom]}>
              <Text style={styles.text}>ニックネーム: </Text>
              <TextInput
                style={styles.nameInput}
                placeholder={"NN、型名など"}
                defaultValue={this.props.pokeData?.nn}
                onChangeText={(text) => {
                  this.pokeData.nn = text;
                  this.props.onChangePokemon(this.pokeData);
                }}
              />
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "50%", paddingRight: 5 }}>
                <Text style={styles.text}>特性: </Text>
                <TextInput
                  style={styles.abilityInput}
                  placeholder={"リベロ"}
                  defaultValue={this.props.pokeData?.ability}
                  onChangeText={(text) => {
                    this.pokeData.ability = text;
                    this.props.onChangePokemon(this.pokeData);
                  }}
                />
              </View>
              <View style={{ width: "50%", paddingLeft: 5 }}>
                <Text style={styles.text}>持物: </Text>
                <TextInput
                  style={styles.abilityInput}
                  placeholder={"いのちのたま"}
                  defaultValue={this.props.pokeData?.item}
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
                {this.wazaInput("わざ1: ", 0, this.props.pokeData!.waza?.[0])}
              </View>
              <View style={{ width: "50%", paddingLeft: 5 }}>
                {this.wazaInput("わざ2: ", 1, this.props.pokeData!.waza?.[1])}
              </View>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View style={{ width: "50%", paddingRight: 5 }}>
                {this.wazaInput("わざ3: ", 2, this.props.pokeData!.waza?.[2])}
              </View>
              <View style={{ width: "50%", paddingLeft: 5 }}>
                {this.wazaInput("わざ4: ", 3, this.props.pokeData!.waza?.[3])}
              </View>
            </View>
            <StatusTable
              data={this.props.pokeData}
              onChangePokemon={this.props.onChangePokemon}
            />
            <View
              style={{
                marginTop: 10,
                backgroundColor: palet.main,
                height: "100%",
              }}
            >
              <Text style={styles.text}>備考: </Text>
              <TextInput
                style={[styles.nameInput, { height: 100 }]}
                defaultValue={this.props.pokeData?.memo}
                onChangeText={(text) => {
                  this.pokeData.memo = text;
                  this.props.onChangePokemon(this.pokeData);
                }}
                multiline={true}
                returnKeyType={"default"}
              />
            </View>
          </KeyboardAwareScrollView>
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
    backgroundColor: palet.back,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBoard: {
    backgroundColor: palet.main,
  },
  spaceBottom: {
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    color: palet.text,
    fontSize: 14,
  },
  scroll: {
    width: "90%",
    paddingTop: 10,
    flex: 1,
  },
  nameInput: {
    height: 30,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    color: palet.text,
    fontSize: 14,
  },
  abilityInput: {
    height: 30,
    width: "100%",
    borderColor: palet.main,
    backgroundColor: palet.main,
    color: palet.text,
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
