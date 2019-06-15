// I use the '@counter/' prefix to make debugging the Application easer
export enum counterActionTypes {
  SET_DEFAULT_VALUE = "@counter/SET_DEFAULT_VALUE",
  INCREMENT = "@counter/INCREMENT",
  DECREMENT = "@counter/DECREMENT",
  RESET = "@counter/RESET"
}

export interface counterState {
  readonly value: number;
}
