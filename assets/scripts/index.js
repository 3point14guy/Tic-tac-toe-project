'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const events = require('./events.js')

$(() => {
  events.addHandlers() // invokes event handlers
})

$(() => {
  let clickCounter = 1 // using this to make sure first marker is X
  $('.squares').on('click', function (event) {
    event.preventDefault() // Listening event for whenever any of the 9 sqrs are clicked
    if ($(event.target).text() === 'x' || $(event.target).text() === 'o') {
      return // if there is a marker there already, it wont overwrite
    } else if (clickCounter === 1) {
      $(event.target).text('x') // will play X on first move
      clickCounter++ // then add one to counter
    } else if (clickCounter % 2 === 0) { // if counter is even, O is played
      $(event.target).text('o')
      clickCounter++
    } else if (clickCounter % 2 === 1) { // if counter is odd, X is played
      $(event.target).text('x')
      clickCounter++
    }
  })
})
$(() => {
  let resetSquares = $('.squares').text()
  $('#reset-game').on('click', function () {
    resetSquares = $('.squares').text('')
  })
})
require('./example')
