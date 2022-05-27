import ACTION_TYPES from "./actionTypes";

export const increment = () => ({ type: ACTION_TYPES.INCREMENT });
export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });
export const setStep = (newStep) => ({ type: ACTION_TYPES.SET_STEP, newStep });

export const changeLang = (newLang) => ({
  type: ACTION_TYPES.CHANGE_LANGUAGES,
  newLang,
});

export const changeTheme = (theme) => ({
  type: ACTION_TYPES.CHANGE_THEME,
  theme,
});
