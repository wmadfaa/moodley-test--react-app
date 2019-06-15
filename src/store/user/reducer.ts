import { Reducer } from "redux";
import { userState, userActionTypes } from "./types";

// Type-safe initialState
const initialState: userState = {
  authenticated: false
};

const reducer: Reducer<userState> = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER_STATE: {
      return { authenticated: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as userReducer };
