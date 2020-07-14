import { Action } from "redux";
import { PokeType } from "../../common/PokeType";

/**
 * アクションを区別するための定数
 */
export const UPDATE_POKE = "SAVE_POKE";

/**
 * 変更したメッセージをReducerに送るためのアクション
 */
export interface UpdatePokeAction extends Action {
  pokeData: PokeType;
}

/**
 * メッセージを変更するアクションを作成する
 * @param
 */
export const createUpdatePokeAction = (
  pokeData: PokeType
): UpdatePokeAction => {
  return {
    pokeData,
    type: UPDATE_POKE,
  };
};
