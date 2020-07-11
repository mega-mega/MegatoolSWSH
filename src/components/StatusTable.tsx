import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
  Col,
} from "react-native-table-component";
import { TextInput } from "react-native-gesture-handler";

export const StatusTable = () => {
  const element = (defValue: number, setter: any) => {
    return <TextInput style={styles.input} />;
  };
  const data = {
    tableHead: ["", "HP", "攻撃", "防御", "特攻", "特防", "素早"],
    tableData: [
      ["種族", element(102, console.log(1)), "130", "80", "80", "95", "102"],
      ["個体", "102", "130", "80", "80", "95", "102"],
      ["努力", "102", "130", "80", "80", "95", "102"],
      ["実値", "102", "130", "80", "80", "95", "102"],
    ],
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
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
  container: { height: 200, marginTop: 10 },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  row: {
    flexDirection: "row",
  },
  input: {
    height: 20,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "blue",
  },
});

export default StatusTable;
