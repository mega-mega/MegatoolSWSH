import { createStackNavigator } from "@react-navigation/stack";
import { firestore } from "firebase";
import React from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { logger } from "react-native-logs";
import Toast from "react-native-tiny-toast";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import palet from "../../common/palet.json";
import { PokeType } from "../../common/PokeType";
import {
  createUpdatePokeAction,
  createUpdatePokeListAction,
} from "../actions/AppAction";
import PokeListItem from "../components/PokeListItem";
import CircleButton from "../elements/CircleButton";
import db from "../repository/FireStore";
import State from "../State";
import AppState from "../states/AppState";
import PokeEditScreen from "./PokeEditScreen";

const Stack = createStackNavigator();

interface Events {
  onChangePokemon: (pokeData: PokeType) => void;
  onChangePokeList: (pokeList: PokeType[]) => void;
}

interface Props extends Events, AppState {}
export const PokeListScreen = (props: Props) => {
  const log = logger.createLogger();

  // DBに更新があると呼ばれる
  const onResult = (snapshot: firestore.QuerySnapshot) => {
    log.debug("update");
    const pokeList = props.pokeList ? props.pokeList : [];
    snapshot.forEach((doc) => {
      // ここは差分だけのデータがくることに注意
      // log.info("update" + doc.get("name"));
      const poke = createPoke(doc);
      pokeList?.push(poke);
    });
    props.onChangePokeList(pokeList);
  };
  const onError = (error: Error) => {
    log.error(error);
  };
  // init
  (async () => {
    if (props.pokeList !== undefined) {
      return;
    }
    const uid = await AsyncStorage.getItem("uid");
    // 初回のDB読み込み
    const snapshot = (await db)
      .collection("userData/" + uid + "/pokeCollection")
      .get();
    const dbList: PokeType[] = [];
    (await snapshot).forEach((doc) => {
      log.debug("get " + doc.get("name"));
      dbList.push(createPoke(doc));
    });
    props.onChangePokeList(dbList);
    // リアルタイム監視
    (await db)
      .collection("userData/" + uid + "/pokeCollection")
      .onSnapshot(onResult, onError);
  })();

  // ポケモンの一覧をリアルタイム取得してリスト生成
  const loadPokeList = async () => {
    console.log("call!!");
    props.pokeList!.forEach((element) => {
      console.log(element.name);
    });
  };

  // 個体の保存処理
  const clickSave = (navigationProps: any) => async () => {
    // TODO: バリデーション処理欲しい
    const uid = await AsyncStorage.getItem("uid");
    const data = props.pokeData!;
    data.updateAt = new Date();
    (await db)
      .collection("userData")
      .doc(uid!)
      .collection("pokeCollection")
      .doc(data.hash)
      .set(data)
      .then(() => {
        log.info("save");
      })
      .catch((error) => {
        log.error(error);
      });
    const { navigation } = navigationProps;
    navigation.navigate("一覧");
    // TODO: スタイルつける https://www.npmjs.com/package/react-native-tiny-toast
    Toast.show("保存しました", {
      position: Toast.position.BOTTOM,
      textStyle: {
        color: palet.back,
      },
      visible: true,
    });
  };
  return (
    <Stack.Navigator screenOptions={headerOption}>
      <Stack.Screen name="一覧" component={ListView(props.pokeList)} />
      <Stack.Screen
        name="追加"
        options={{
          header: ({ scene, previous, navigation }) => {
            return (
              <Header
                centerComponent={{
                  text: "ポケモン追加",
                  style: { color: palet.back, fontSize: 16 },
                }}
                rightComponent={
                  <Icon
                    name="save"
                    type="font-awesome"
                    color={palet.back}
                    style={{
                      marginRight: 20,
                    }}
                    onPress={clickSave(props)}
                  />
                }
                leftComponent={
                  <TouchableOpacity onPress={navigation.goBack}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Icon
                        name="angle-left"
                        type="font-awesome"
                        color={palet.back}
                        style={{
                          marginLeft: 10,
                        }}
                      />
                      <Text style={styles.text}>一覧</Text>
                    </View>
                  </TouchableOpacity>
                }
                backgroundColor={palet.main}
              />
            );
          },
        }}
      >
        {() => <PokeEditScreen updateAt={new Date()} />}
      </Stack.Screen>
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

// 一覧のViewを生成
const ListView = (pokeList?: PokeType[]) => (props: any) => {
  const { navigation } = props;
  const list: any[] = [];
  pokeList?.forEach((item) => {
    return list.push(<PokeListItem itemData={item} />);
  });
  return (
    <View style={styles.container}>
      <ScrollView>{list}</ScrollView>
      <Toast />
      <CircleButton
        onPress={() => {
          navigation.navigate("追加");
        }}
      />
    </View>
  );
};

const createPoke = (doc: firestore.DocumentData): PokeType => {
  return {
    hash: doc.get("hash"),
    name: doc.get("name"),
    nn: doc.get("nn"),
    ability: doc.get("ability"),
    pokesonality: doc.get("pokesonality"),
    item: doc.get("item"),
    waza: doc.get("waza"),
    status: doc.get("status"),
    memo: doc.get("memo"),
    createAt: doc.get("createAt"),
    updateAt: doc.get("updateAt"),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: palet.back,
  },
});
const mapStateToProps = (state: State): AppState => {
  return {
    pokeData: state.app.pokeData,
    pokeList: state.app.pokeList,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): Events => {
  return {
    onChangePokemon: (pokeData: PokeType) => {
      dispatch(createUpdatePokeAction(pokeData));
    },
    onChangePokeList: (pokeList: PokeType[]) => {
      dispatch(createUpdatePokeListAction(pokeList));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PokeListScreen);
