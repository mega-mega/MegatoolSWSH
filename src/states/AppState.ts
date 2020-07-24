import { PokeType } from "../../common/PokeType";

interface AppState {
  // 編集画面のポケモンデータ
  pokeData?: PokeType;
  // 登録した個体一覧
  pokeList?: PokeType[];
}
export default AppState;
