// I use the '@user/' prefix to make debugging the Application easer
export enum userActionTypes {
  SET_USER_STATE = "@user/SET_USER_STATE"
}

export interface userState {
  readonly authenticated: boolean;
}
