// src/reducers/groups.js
import { FETCHED_GROUPS } from '../actions/groups/fetch'
// import {
//   GROUP_CREATED,
//   GROUP_UPDATED,
//   GROUP_REMOVED
// } from '../actions/groups/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_GROUPS :
      return [ ...payload ]

    // case GROUP_CREATED :
    //   const newGroup = { ...payload }
    //   return [newGroup].concat(state)
    //
    // case GROUP_UPDATED :
    //   return state.map((group) => {
    //     if (group._id === payload._id) {
    //       return { ...payload }
    //     }
    //     return group
    //   })
    //
    // case GROUP_REMOVED :
    //     return state.filter((group) => (group._id !== payload._id))

    default :
      return state

  }
}
