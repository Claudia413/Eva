import client from './client'

// API Client
// -----------------------------------------------------------------------------
// Usage:
// import API from './api'
// const api = new API()
//
// const groups = api.service('groups')
// groups.find()
// groups.create({ groupNumber: 'batch 8', ... })
//
// See: https://docs.feathersjs.com/api/services.html
//
// The above service calls return a Promise, so to use the response data, you
// will need to write something like:
//
// groups.find()
//   .then((result) => {
//     // result has your data!
//   })
//   .catch((error) => {
//     // optionally catch errors and act on them
//   })
//
class API {
  constructor() {
    this.app = client
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate(user) {
    const { email, password } = user
    return this.app.authenticate(
      Object.assign({}, { strategy: 'local' }, {
      email,
      password,
    }))
  }

  signOut() {
    return this.app.logout()
  }
}

export default API
