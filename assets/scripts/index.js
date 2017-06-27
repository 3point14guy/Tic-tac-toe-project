'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$('.square-one').on('click', function () {
  $('.square-one').text('x')
})
$('.square-two').on('click', function () {
  $('.square-two').text('x')
})
$('.square-three').on('click', function () {
  $('.square-three').text('x')
})
$('.square-four').on('click', function () {
  $('.square-four').text('x')
})
$('.square-five').on('click', function () {
  $('.square-five').text('x')
})
$('.square-six').on('click', function () {
  $('.square-six').text('x')
})
$('.square-seven').on('click', function () {
  $('.square-seven').text('x')
})
$('.square-eight').on('click', function () {
  $('.square-eight').text('x')
})
$('.square-nine').on('click', function () {
  $('.square-nine').text('x')
})
// $('.squareOne').on('click', insertMarker() {
//     squareone = 'x'
// })

require('./example')
