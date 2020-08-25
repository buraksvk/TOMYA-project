import { SET_THEME } from "../actions/constants";

const initialState = {
  themes: true,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        themes: action.payload,
      };
    default:
      return state;
  }
}
export { themeReducer };
