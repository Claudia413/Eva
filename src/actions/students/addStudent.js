import API from "../../api";
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from "../loading";

export const ADD_STUDENT = "ADD_STUDENT";

const api = new API();

export default student => {
  return dispatch => {
    dispatch({ type: APP_LOADING });

    const backend = api.service("students");

    backend.create(student)
      .then(result => {
        dispatch({ type: APP_DONE_LOADING });
        dispatch({ type: LOAD_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: APP_DONE_LOADING });
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        });
      });
  };
};
