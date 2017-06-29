'use strict'

// defines messages to present to user about the status of actions they commit

const store = require('./store')

const signUpSuccess = (data) => {
  console.log(data)
  console.log(data.user.email + ' now has an account')
}
const signInSuccess = (data) => {
  store.user = data.user
  console.log(store.user)
  // trying to close modal box after submit
  // $('#submit').submit(function () {
  //   $('#sign-in').modal('hide')
  //   return false
  // })
}
const signInFailure = (error) => {
  console.log('Three was an error logging in to the accout', error)
}
const signUpFailure = (error) => {
  console.error('There was an error creating the account ', error)
}

const passwordChangeSuccess = function () {
  console.log('Password changed!')
}
const passwordChangeFailure = function (error) {
  console.log('password change failed', error)
}
const logoutSuccess = function () {
  console.log('You are now logged out.')
  // trying to close modal box after submit
  // $('#logout').click(function () {
  //   $('#logout').hide(1000)
  // })
}

const logoutFailure = function (error) {
  console.log('There was an error logging out.', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  logoutSuccess,
  logoutFailure
}
