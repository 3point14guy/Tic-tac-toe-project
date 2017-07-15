'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
  $('.sign-up-message').text(data.user.email + ' now has an account. Please login.')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('.logout-buttons').show(2900)
  $('.login-message').text(data.user.email + ' You have successfully logged in.')
  $('.login-buttons').hide(2600)
  // trying to close modal box after submit
  // $('#submit').submit(function () {
  // $('#submit-login').hide(2000)
  // $('document').show(1500)
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
  $('.game-board').hide()
  $('.logout-buttons').hide()
  $('.win-view-x').hide()
  $('.tie-view').hide()
  $('.instructions').hide()
  $('.game-logo').show()
  $('.login-buttons').show()
  $('.title-hide').hide()
  // trying to close modal box after submit
  // $('#logout').click(function () {
  //   $('#logout').hide(1000)
  // })
}
const logoutFailure = function (error) {
  $('.logout-message').text('Oops! Something went wrong.', error)
}

const createGameSuccess = function (data) {
  store.game = data.game
  console.log(store.game.id)
  return
}
const createGameFailure = function () {
  return
}

const updateGameSuccess = function (data) {
  console.log('success')
  return
}
const updateGameFailure = function (data) {
  console.log('Ooops!')
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
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure
}
