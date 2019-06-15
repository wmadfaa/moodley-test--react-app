import { ReactNode } from "react";

// I use the '@ui/' prefix to make debugging the Application easer
export enum uiActionTypes {
  SET_MODAL_STATE = "@ui/SET_MODAL_STATE",
  SET_MODAL_CONTENT = "@ui/SET_MODAL_CONTENT"
}

export interface modalContentType {
  title: string;
  description: ReactNode;
}

export interface uiState {
  readonly modalContent?: modalContentType;
  readonly modalState: boolean;
}
