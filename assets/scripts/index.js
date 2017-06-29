'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const events = require('./events.js')

$(() => {
  events.addHandlers()
})
// const turn = 0

let clickCounter = 1
$('.squares').on('click', function (event) {
  event.preventDefault()
  if ($(event.target).text() === 'x' || $(event.target).text() === 'o') {
    return
  } else if (clickCounter === 1) {
    $(event.target).text('x')
    clickCounter++
  } else if (clickCounter % 2 === 0) {
    $(event.target).text('o')
    clickCounter++
  } else if (clickCounter % 2 === 1) {
    $(event.target).text('x')
    clickCounter++
  }
})

require('./example')
