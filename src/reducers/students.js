import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { ADD_STUDENT } from '../actions/students/addStudent'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [ ...payload ]

    case ADD_STUDENT :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state

  }
}
