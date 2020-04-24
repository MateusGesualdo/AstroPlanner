import { combineReducers } from "redux";

const initialState = { list: [] }

export const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, list: action.payload.list }
    default: return state
  }
}

export const rootReducer = combineReducers({
  tasks
});
