import { SHOWALERT, AUTHUSER } from "./Actions";
import { combineReducers } from "redux";

export const showAlertReducer = (
  state = {
    show: false,
    color: "",
    title: "",
    message: "",
  },
  action
) => {
  switch (action.type) {
    case SHOWALERT:
      const { show, title, color, message } = action.payload;
      return {
        show,
        title,
        color,
        message,
      };
    default:
      return state;
  }
};

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case AUTHUSER:
      const { userAuth } = action.payload;
      return userAuth;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  alert: showAlertReducer,
  userAuthenticated: authReducer,
});
