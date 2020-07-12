export interface PokeType {
  number: number;
  name: string;
  nn: string;
  ability: string;
  pokesonality: string;
  item: string;
  status: {
    bs: number[];
    iv: number[];
    ev: number[];
    st: number[];
  };
}
