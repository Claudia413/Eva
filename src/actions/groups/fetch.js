import API from '../../api'

export const FETCHED_GROUPS = 'FETCHED_GROUPS'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('groups')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_GROUPS,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
