import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Row, Rows, Table } from "react-native-table-component"; // FIXME: エラーけしたい。。
import { connect } from "react-redux";
import { Dispatch } from "redux";
import palet from "../../common/palet.json";
import { PokeType } from "../../common/PokeType";
import { createUpdatePokeAction } from "../actions/AppAction";
import State from "../State";
import AppState from "../states/AppState";
interface Events {
  onChangePokemon: (pokeData: PokeType) => void;
}

interface Props extends Events, AppState {}

export const StatusTable = (props: Props) => {
  const elemList = (stateKey: "bs" | "iv" | "ev" | "st") => {
    const list: any[] = [];
    const habcds: (0 | 1 | 2 | 3 | 4 | 5)[] = [0, 1, 2, 3, 4, 5];
    habcds.forEach((key) => {
      list.push(element(stateKey, key));
    });
    return list;
  };

  /**
   * @param defValue
   * @param setter
   */
  const element = (
    stateKey: "bs" | "iv" | "ev" | "st",
    habcds: 0 | 1 | 2 | 3 | 4 | 5
  ) => {
    if (!props.pokeData) {
      return <Text style={styles.text}>0</Text>;
    }
    return (
      <TextInput
        style={styles.input}
        // tslint:disable-next-line: no-string-literal
        defaultValue={props.pokeData.status![stateKey][habcds].toString()}
        onChangeText={(text) => {
          let numText = Number(text);
          if (!isNaN(numText)) {
            numText = 0;
          }
          const poke = props.pokeData;
          poke!.status![stateKey][habcds] = numText;
          props.onChangePokemon(poke!);
        }}
      />
    );
  };
  const data = {
    tableHead: ["", "HP", "攻撃", "防御", "特攻", "特防", "素早"],
    tableData: [
      ["種族", ...elemList("bs")],
      ["個体", ...elemList("iv")],
      ["努力", ...elemList("ev")],
      ["実値", ...elemList("st")],
    ],
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 0.5, borderColor: palet.text }}>
        <Row
          data={data.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows
          data={data.tableData}
          style={styles.head}
          textStyle={styles.text}
        />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 200, width: "100%", marginTop: 10 },
  head: { height: 40, backgroundColor: palet.main },
  text: {
    marginRight: "auto",
    marginLeft: "auto",
    color: palet.text,
  },
  row: {
    flexDirection: "row",
  },
  input: {
    height: 20,
    width: "100%",
    color: palet.text,
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
export default connect(mapStateToProps, mapDispatchToProps)(StatusTable);
