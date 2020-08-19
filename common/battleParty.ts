import { PokeType } from "./pokeType";

// ポケモンデータ、戦績、ボックス名？、ボックス番号（ハッシュ？、作成日
export default interface battleParty {
  hash?: string;
  poke: PokeType[];
  createAt: Date;
  updateAt: Date;
}
