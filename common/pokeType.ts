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

export interface states {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}
