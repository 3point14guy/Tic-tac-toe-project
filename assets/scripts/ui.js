'use strict'

// defines messages to present to user about the status of actions they commit

const store = require('./store')

const signUpSuccess = (data) => {
  $('.sign-up-message').text(data.user.email + ' now has an account. Please login.')
}
const signInSuccess = (data) => {
  store.user = data.user
  // $('.login-buttons').hide() ****this makes game unplayable
  $('.logout-buttons').show(300)
  $('.login-message').text(data.user.email + ' You have successfully logged in.')
  // trying to close modal box after submit
  // $('#submit').submit(function () {
  // $('#submit-login').hide(300)
  // $('document').show()
  //   return false
  // })
}
const signInFailure = (error) => {
  $('.login-message').text('Login failure. ', error)
}
const signUpFailure = (error) => {
  $('.sign-up-message').text('There was an error creating the account ', error)
}

const passwordChangeSuccess = function () {
  $('.change-pswrd-message').text('Password changed!')
}
const passwordChangeFailure = function (error) {
  $('.change-pswrd-message').text('Password change failed', error)
}
const logoutSuccess = function () {
  $('.logout-message').text('You are now logged out.')
  $('.game-logo').show()
  $('.gameboard').hide()
  $('.logout-buttons').hide()
  $('.win-view-x').hide()
  $('.tie-view').hide()
  $('.instructions').hide()
  // trying to close modal box after submit
  // $('#logout').click(function () {
  //   $('#logout').hide(1000)
  // })
}

const logoutFailure = function (error) {
  $('.logout-message').text('Oops! Something went wrong.', error)
}

const createGameSuccess = function () {
  // console.log('Created new game')
  return
}

const createGameFailure = function () {
  // console.log('Your create game failed')
  return
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  logoutSuccess,
  logoutFailure,
  createGameFailure,
  createGameSuccess
}
