import { action } from "typesafe-actions";
import { userActionTypes } from "./types";

// i use the `action` helper function provided by `typesafe-actions` to writ Redux actions in a type-safe manner.

export const setUserState = (authenticated: boolean) =>
  action(userActionTypes.SET_USER_STATE, authenticated);
