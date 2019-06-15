import { action } from "typesafe-actions";
import { uiActionTypes, modalContentType } from "./types";

// i use the `action` helper function provided by `typesafe-actions` to writ Redux actions in a type-safe manner.

export const setModalState = (state: boolean) =>
  action(uiActionTypes.SET_MODAL_STATE, state);

export const setModalContent = (modalContent?: modalContentType) =>
  action(uiActionTypes.SET_MODAL_CONTENT, modalContent);
