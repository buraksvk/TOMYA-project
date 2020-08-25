import { SET_PRODUCT } from "../actions/constants";

const initialState = {
  product: "BTCTRY",
};

function testRedux(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}
export { testRedux };
