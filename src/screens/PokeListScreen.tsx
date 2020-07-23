import { createStackNavigator } from "@react-navigation/stack";
import { firestore } from "firebase";
import React from "react";
import { AsyncStorage, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import { logger } from "react-native-logs";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import palet from "../../common/palet.json";
import { PokeType } from "../../common/PokeType";
import {
  createUpdatePokeListAction,
  createUpdatePokeAction,
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
    // uid/pokeCollectionをリアルタイムで監視
  };

  // 個体の保存処理
  const clickSave = async () => {
    // TODO: バリデーション処理欲しい
    const uid = await AsyncStorage.getItem("uid");
    const data = props.pokeData!;
    // const data: PokeType = {
    //   number: 4,
    //   name: "ガブリアス",
    //   nn: "陽気スカーフ",
    //   ability: "さめはだ",
    //   pokesonality: "ようき",
    //   item: "こだわりスカーフ",
    //   waza: ["", "", "", ""],
    //   status: {
    //     bs: [0, 0, 0, 0, 0, 0],
    //     iv: [0, 0, 0, 0, 0, 0],
    //     ev: [0, 0, 0, 0, 0, 0],
    //     st: [0, 0, 0, 0, 0, 0],
    //   },
    //   memo: "",
    //   createAt: new Date(),
    //   updateAt: new Date(),
    // };
    data.updateAt = new Date();
    console.log(data);
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
    // 保存後にstateを空にする
    props.onChangePokemon({});
  };
  return (
    <Stack.Navigator screenOptions={headerOption}>
      <Stack.Screen name="一覧" component={ListView(props.pokeList)} />
      <Stack.Screen
        name="追加"
        options={{
          headerRight: () => {
            return (
              <Icon
                name="save"
                type="font-awesome"
                color={palet.back}
                style={{
                  marginRight: 20,
                }}
                onPress={clickSave}
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

// FIXME: propsの型を調べる
const ListView = (pokeList?: PokeType[]) => (props: any) => {
  const { navigation } = props;
  const list: any[] = [];
  pokeList?.forEach((item) => {
    return list.push(<PokeListItem />);
  });
  return (
    <View style={styles.container}>
      {list}
      {/* <PokeListItem />
      <PokeListItem />
      <PokeListItem />
      <PokeListItem />
      <PokeListItem />
      <PokeListItem /> */}
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
