import React, { Component } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { createUpdateMessageAction } from "./src/actions/AppAction";
import State from "./src/State";
import AppState from "./src/states/AppState";

interface Events {
  onChangeMessage: (message: string) => void;
}

interface Props extends Events, AppState {}
const inputStyle: StyleProp<TextStyle> = {
  borderColor: "#999",
  borderRadius: 5,
  borderWidth: 1,
  padding: 5,
  width: 200,
};
export const SampleHome = (props: Props) => {
  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <Text>はじめての React Native and Redux</Text>
      <TextInput
        style={inputStyle}
        placeholder="ここに値を入力してください"
        onChangeText={props.onChangeMessage}
      >
        {props.message}
      </TextInput>
      <Text>{props.message || "ここに入力した文字が表示されます"}</Text>
    </View>
  );
};

const mapStateToProps = (state: State): AppState => {
  return {
    message: state.app.message,
    pokeData: state.app.pokeData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Events => {
  return {
    onChangeMessage: (message: string) => {
      dispatch(createUpdateMessageAction(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleHome);
