'use strict'

// const onSuccess = function (data) {
//   // if (data.book){
//   //   console.log(data.book)
//   // } else {
//   console.table(data.books)
// }
'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}
const signInSuccess = (data) => {
  store.user = data.user
  console.log(store.user)
}
const signUpFailure = (error) => {
  console.error(error)
}

const passwordChangeSuccess = function () {
  console.log('Password changed!')
}
const passwordChangeFailure = function (error) {
  console.log('password change failed', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  passwordChangeSuccess,
  passwordChangeFailure
}
