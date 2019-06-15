import { combineReducers } from "redux";
import { counterState } from "./counter/types";
import { counterReducer } from "./counter/reducer";

import { userState } from "./user/types";
import { userReducer } from "./user/reducer";

import { uiState } from "./ui/types";
import { uiReducer } from "./ui/reducer";

export interface ApplicationState {
  counter: counterState;
  user: userState;
  ui: uiState;
}

export const rootReducer = combineReducers<ApplicationState>({
  counter: counterReducer,
  user: userReducer,
  ui: uiReducer
});
