'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})
// follow the template in the lines below
// const bookEvents = require('./books/events')
// $(() => {
//   $('#books-search').on('submit', bookEvents.onGetBooks)
//   $('#book-search').on('submit', bookEvents.getOneBook)
//   $('#request-delete').on('submit', bookEvents.deleteOneBook)
// })
const events = require('./events.js')

// On document ready
$(() => {
  events.addHandlers()
})

require('./example')
