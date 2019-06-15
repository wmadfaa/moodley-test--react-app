import { action } from "typesafe-actions";
import { counterActionTypes } from "./types";

// i use the `action` helper function provided by `typesafe-actions` to writ Redux actions in a type-safe manner.

export const setDefaultValue = (value: number) =>
  action(counterActionTypes.SET_DEFAULT_VALUE, value);

export const increment = () => action(counterActionTypes.INCREMENT);
export const decrement = () => action(counterActionTypes.DECREMENT);
export const reset = () => action(counterActionTypes.RESET);
