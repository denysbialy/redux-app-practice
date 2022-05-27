import ACTION_TYPES from "../actions/actionTypes";
import CONSTANTS from "../constants";

const initialState = {
  theme: CONSTANTS.THEME.dark,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_THEME:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export default themeReducer;
