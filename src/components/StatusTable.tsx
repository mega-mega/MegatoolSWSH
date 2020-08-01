import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Row, Rows, Table } from "react-native-table-component"; // FIXME: エラーけしたい。。
import palet from "../../common/palet.json";
import { PokeType, states } from "../../common/PokeType";

interface Props {
  data?: PokeType;
  onChangePokemon: (pokeData: PokeType) => void;
}

export const StatusTable = (props: Props) => {
  const [pokeData, setPokeData] = useState(props.data);
  console.log(props.data);
  const elemList = (stateKey: "bs" | "iv" | "ev" | "st") => {
    const list: any[] = [];
    [0, 1, 2, 3, 4, 5].forEach((habcds) => {
      list.push(element(stateKey, habcds));
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
    if (!pokeData) {
      return <Text style={styles.text}>0</Text>;
    }
    return (
      <TextInput
        style={styles.input}
        // tslint:disable-next-line: no-string-literal
        defaultValue={pokeData.status![stateKey][habcds].toString()}
        onChangeText={(text) => {
          let numText = Number(text);
          if (!isNaN(numText)) {
            numText = 0;
          }
          pokeData.status![stateKey][habcds] = numText;
          setPokeData(pokeData);
          props.onChangePokemon(pokeData);
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

export default StatusTable;
