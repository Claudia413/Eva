// src/actions/user/sign-in.js
import { history } from '../../store'
import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {

  console.log(user)
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.authenticate(user)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        api.app.set('user', result)

        history.replace('/')

        dispatch({
          type: USER_SIGNED_IN,
          payload: result
        })

      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
