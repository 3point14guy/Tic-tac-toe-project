'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log(this)
  // console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess) // defines what to do on success
    .catch(ui.signUpFailure)// defines what to do on failure
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  // console.log(this)
  // console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  // console.log(this)
  // console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeFailure)
}
const onLogout = function (event) {
  // console.log('i made it this far')
  // console.log(this)
  event.preventDefault()
  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

const createAGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const displayStats = function (event) {
  console.log('gonna get stats now')
  api.getStats()
    .then(ui.displayStatsSuccess)
    .catch(ui.displayStatsFailure)
}

// defines all these event hanlers as a constant that can be passed to other files
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
  $('#resetGameBoard').on('click', createAGame)
  $('#stats').on('click', displayStats)
}

module.exports = { // tells to make these variables available to other files
  addHandlers
}
