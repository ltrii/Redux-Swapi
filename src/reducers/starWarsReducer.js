import { FETCH_SWAPI, REQSUCCESS, REQFAILURE } from "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_SWAPI:
      return action.payload;
    case REQSUCCESS:
      return console.log("succ");
    case REQFAILURE:
      return console.log('fail')
    default:
      return state;
  }
};
