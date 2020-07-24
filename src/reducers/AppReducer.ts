import clone from "clone";
import { Action, Reducer } from "redux";
import {
  UpdatePokeAction,
  UpdatePokeListAction,
  UPDATE_POKE,
  UPDATE_POKE_LIST,
} from "../actions/AppAction";
import AppState from "../states/AppState";

/**
 * Stateの初期値
 */
const initState: AppState = {
  pokeData: {},
  pokeList: undefined,
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
    case UPDATE_POKE:
      {
        newState = clone(state);
        const _action = action as UpdatePokeAction;
        newState.pokeData = _action.pokeData;
      }
      break;
    case UPDATE_POKE_LIST:
      {
        newState = clone(state);
        const _action = action as UpdatePokeListAction;
        newState.pokeList = _action.pokeList;
      }
      break;
    default:
      break;
  }
  // ここで返すオブジェクトが前回と異なるなら、関連する Component が再描画される。
  return newState;
};

export default appReducer;
