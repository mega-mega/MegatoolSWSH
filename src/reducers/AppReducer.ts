import clone from "clone";
import { Action, Reducer } from "redux";

import {
  UpdateMessageAction,
  UPDATE_MESSAGE,
  UpdatePokeAction,
  UPDATE_POKE,
} from "../actions/AppAction";
import AppState from "../states/AppState";

/**
 * Stateの初期値
 */
const initState: AppState = {
  message: "",
  pokeData: {
    number: 0,
    name: "ガブリアス",
    nn: "",
    ability: "さめはだ",
    pokesonality: "ようき",
    item: "こだわりスカーフ",
    status: {
      bs: [0, 0, 0, 0, 0, 0],
      iv: [0, 0, 0, 0, 0, 0],
      ev: [0, 0, 0, 0, 0, 0],
      st: [0, 0, 0, 0, 0, 0],
    },
  },
};

/**
 * Reducer 関数
 *
 */

const appReducer: Reducer<AppState> = (
  state: AppState = initState,
  action: Action
) => {
  let newState = state;
  switch (action.type) {
    case UPDATE_MESSAGE:
      {
        // ステート更新する場合は、別のオブジェクトを作成する
        newState = clone(state);
        const _action = action as UpdateMessageAction;
        newState.message = _action.message;
      }
      break;
    case UPDATE_POKE:
      {
        newState = clone(state);
        const _action = action as UpdatePokeAction;
        newState.pokeData = _action.pokeData;
      }
      break;
    default:
      break;
  }
  // ここで返すオブジェクトが前回と異なるなら、関連する Component が再描画される。
  return newState;
};

export default appReducer;
