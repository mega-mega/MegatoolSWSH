export interface PokeType {
  hash?: string;
  name?: string;
  nn?: string;
  ability?: string;
  pokesonality?: string;
  item?: string;
  waza?: {
    0: string;
    1: string;
    2: string;
    3: string;
  };
  status?: {
    bs: states;
    iv: states;
    ev: states;
    st: states;
  };
  memo?: string;
  createAt?: Date;
  updateAt?: Date;
}

interface states {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}
