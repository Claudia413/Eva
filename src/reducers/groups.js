// src/reducers/groups.js
import { FETCHED_GROUPS } from '../actions/groups/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_GROUPS :
      return [ ...payload ]

    default :
      return state

  }
}
