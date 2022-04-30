import { SHOWALERT, AUTHUSER } from "./actions";

export const showAlert = (show, color, title, message) => {
  return (dispatch) =>
    dispatch({
      type: SHOWALERT,
      payload: {
        show,
        color,
        title,
        message,
      },
    });
};

export const authenticateUser = (auth) => {
  return (dispatch) =>
    dispatch({ type: AUTHUSER, payload: { userAuth: auth } });
};
