import { Reducer } from "redux";
import { uiState, uiActionTypes } from "./types";

// Type-safe initialState
const initialState: uiState = {
  modalContent: undefined,
  modalState: false
};

const reducer: Reducer<uiState> = (state = initialState, action) => {
  switch (action.type) {
    case uiActionTypes.SET_MODAL_STATE: {
      return { ...state, modalState: action.payload };
    }
    case uiActionTypes.SET_MODAL_CONTENT: {
      return { ...state, modalContent: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as uiReducer };
