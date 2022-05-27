import ACTION_TYPES from "../actions/actionTypes";
import CONSTANTS from '../constants'
const initialSate = {
  lang: CONSTANTS.LANGUAGES.en,
};
const langReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_LANGUAGES:
      return { ...state, lang: action.newLang };

    default:
      return state;
  }
};

export default langReducer;
