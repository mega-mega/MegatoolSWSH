import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { firestore } from "firebase";
import React, { useState } from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { logger } from "react-native-logs";
import Toast from "react-native-tiny-toast";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ConfirmDialog } from "react-native-simple-dialogs";
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
  const [editTitle, setEditTitle] = useState("ポケモン追加");

  const log = logger.createLogger();

  // DBに更新があると呼ばれる
  const onResult = (snapshot: firestore.QuerySnapshot) => {
    const pokeList: PokeType[] = props.pokeList ? props.pokeList : [];
    snapshot.forEach((doc) => {
      // ここは全てのデータがくるので効率が悪い
      const poke = createPoke(doc);
      pokeList?.push(poke);
    });
    // TODO: createAt descでソートする
    pokeList.sort((a, b) => {
      if (!(a && b && a.createAt && b.createAt)) return 0;
      const aTime = a.createAt;
      const bTime = b.createAt;
      // console.log(a);
      // console.log(JSON.stringify(a));
      // console.log(JSON.stringify(a.waza));
      if (aTime.getTime() > bTime.getTime()) return -1;
      if (aTime.getTime() < bTime.getTime()) return 1;
      return 0;
    });
    props.onChangePokeList(pokeList);
  };
  const onError = (error: Error) => {
    log.error(error);
  };
  // updateここまで

  // init
  (async () => {
    if (props.pokeList !== undefined) {
      return;
    }
    const uid = await AsyncStorage.getItem("uid");
    // 初回のDB読み込み WIP
    const snapshot = (await db)
      .collection("userData/" + uid + "/pokeCollection")
      .orderBy("createAt", "desc")
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
    // hashを初期化する
    const pokeData = props.pokeData;
    if (pokeData) {
      pokeData.hash = "";
      props.onChangePokemon(pokeData!);
    }
  };

  return (
    <Stack.Navigator screenOptions={headerOption}>
      <Stack.Screen
        name="一覧"
        options={{
          header: () => {
            return (
              <Header
                centerComponent={{
                  text: "一覧",
                  style: { color: palet.text, fontSize: 16 },
                }}
                backgroundColor={palet.main}
              />
            );
          },
        }}
        component={ListView(
          props.pokeList!,
          props.onChangePokemon,
          setEditTitle
        )}
      />
      <Stack.Screen
        name="追加"
        options={{
          header: ({ scene, previous, navigation }) => {
            return (
              <Header
                centerComponent={{
                  text: editTitle,
                  style: { color: palet.text, fontSize: 16 },
                }}
                rightComponent={
                  <Icon
                    name="save"
                    type="font-awesome"
                    color={palet.text}
                    style={{
                      marginRight: 20,
                    }}
                    onPress={clickSave(props)}
                  />
                }
                leftComponent={
                  <TouchableOpacity
                    onPress={() => {
                      const poke = props.pokeData;
                      if (poke) {
                        poke.hash = "";
                        props.onChangePokemon(poke);
                      }
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

// 個体削除処理
const showDialog = (
  setVisible: (visible: boolean) => void,
  setPoke: (p: PokeType) => void
) => (pokeData: PokeType) => {
  setPoke(pokeData);
  setVisible(true);
};

// 一覧のViewを生成
const ListView = (
  pokeList: PokeType[],
  onChangePokemon: (p: PokeType) => void,
  setEditTitle: (title: string) => void
) => (props: any) => {
  const { navigation } = props;
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [deletePoke, setDeletePoke]: [
    PokeType,
    (p: PokeType) => void
  ] = useState({});
  const list: any[] = [];
  pokeList?.forEach((item) => {
    list.push(
      <PokeListItem
        itemData={item}
        onClick={editPoke(navigation, onChangePokemon, setEditTitle)}
        onLongClick={showDialog(setVisibleDialog, setDeletePoke)}
      />
    );
  });
  return (
    <View style={styles.container}>
      {visibleDialog && (
        <ConfirmDialog
          title="完全に削除されます"
          message={deletePoke.name + " を削除しますか？"}
          visible={true}
          onTouchOutside={() => setVisibleDialog(false)}
          positiveButton={{
            title: "はい",
            onPress: async () => {
              const uid = await AsyncStorage.getItem("uid");
              console.log(deletePoke.hash);
              (await db)
                .collection("userData/" + uid + "/pokeCollection")
                .doc(deletePoke.hash)
                .delete()
                .then(() => {
                  Toast.show("削除しました");
                })
                .catch((err) => {
                  console.log(err);
                });
              setVisibleDialog(false);
            },
          }}
          negativeButton={{
            title: "いいえ",
            onPress: () => setVisibleDialog(false),
          }}
        />
      )}
      <ScrollView style={{ flex: 1, marginHorizontal: 5, marginVertical: 3 }}>
        {list}
      </ScrollView>
      <Toast />
      <CircleButton
        onPress={() => {
          setEditTitle("ポケモン追加");
          navigation.navigate("追加");
        }}
      />
    </View>
  );
};

const editPoke = (
  navigation: StackNavigationProp<Record<string, object | undefined>, string>,
  onChangePokemon: (p: PokeType) => void,
  setEditTitle: (title: string) => void
) => (pokeData: PokeType) => {
  setEditTitle("ポケモン編集");
  if (onChangePokemon) {
    onChangePokemon(pokeData);
  }
  navigation.navigate("追加");
};

const createPoke = (doc: firestore.DocumentData): PokeType => {
  return {
    hash: doc.get("hash"),
    name: doc.get("name"),
    nn: doc.get("nn"),
    ability: doc.get("ability"),
    pokesonality: doc.get("pokesonality"),
    item: doc.get("item"),
    waza: { ...doc.get("waza") },
    status: { ...doc.get("status") },
    memo: doc.get("memo"),
    createAt: doc.get("createAt").toDate(),
    updateAt: doc.get("updateAt").toDate(),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: palet.back,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: palet.text,
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
