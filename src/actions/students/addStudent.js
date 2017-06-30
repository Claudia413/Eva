import API from "../../api";
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from "../loading";

export const ADD_STUDENT = "ADD_STUDENT";

const api = new API();

export default (student) => {
  return {
    type: ADD_STUDENT,
    payload: student
  };
};
