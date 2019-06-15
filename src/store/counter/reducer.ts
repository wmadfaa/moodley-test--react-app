import { Reducer } from "redux";
import { counterState, counterActionTypes } from "./types";

// Type-safe initialState
const initialState: counterState = {
  value: 0
};

const reducer: Reducer<counterState> = (state = initialState, action) => {
  switch (action.type) {
    case counterActionTypes.SET_DEFAULT_VALUE: {
      return { value: action.payload };
    }
    case counterActionTypes.INCREMENT: {
      return { value: state.value + 1 };
    }
    case counterActionTypes.DECREMENT: {
      return { value: state.value - 1 };
    }
    case counterActionTypes.RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export { reducer as counterReducer };
