'use strict'

const config = require('./config')
const store = require('./store')

// these functions tell the site how to pass info to the api for the various
// actions we would like to perform as indicated by the variable names
const signUp = function (data) {
  // console.log('api data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  // console.log('api data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  // console.log('api data is', data)
  // console.log('api store is', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const logout = function () {
  // console.log('api store is', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createGame = function () {
  // console.log('createGame function working')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  logout,
  createGame
}
