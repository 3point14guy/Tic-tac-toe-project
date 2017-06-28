'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
let currentMarker = require('./store')
let lastMarkerPlayed = require('./store')
let oppositeMarker = require('./store')

$(() => {
  setAPIOrigin(location, config)
})
// these select the x or o button
$('.x-button').on('click', function () {
  currentMarker = 'x'
})
$('.o-button').on('click', function () {
  currentMarker = 'o'
})
if (currentMarker === 'x') {
  oppositeMarker = 'o'
} else {
  oppositeMarker = 'x'
}

// these select squares 1-9 and then do a task
// first it checks if the currentMarker (either the x game piece or the o game
// piece) has been played; if no, enter the game piece in the square
$('.square-one').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-one').text(currentMarker)
  } else {
    $('.square-one').text(oppositeMarker)
  }
  lastMarkerPlayed = currentMarker
})
$('.square-two').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-two').text(currentMarker)
  } else {
    $('.square-two').text(oppositeMarker)
  }
  lastMarkerPlayed = currentMarker
})
$('.square-three').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-three').text(currentMarker)
    lastMarkerPlayed = currentMarker
  } else {
    $('.square-three').text(oppositeMarker)
  }
})
$('.square-four').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-four').text(currentMarker)
    lastMarkerPlayed = currentMarker
  } else {
    $('.square-four').text(oppositeMarker)
  }
})
$('.square-five').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-five').text(currentMarker)
    lastMarkerPlayed = currentMarker
  } else {
    $('.square-five').text(oppositeMarker)
  }
})
$('.square-six').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-six').text(currentMarker)
    lastMarkerPlayed = currentMarker
  } else {
    $('.square-six').text(oppositeMarker)
  }
})
$('.square-seven').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-seven').text(currentMarker)
    lastMarkerPlayed = currentMarker
  } else {
    $('.square-seven').text(oppositeMarker)
  }
})
$('.square-eight').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-eight').text(currentMarker)
    lastMarkerPlayed = currentMarker
  } else {
    $('.square-eight').text(oppositeMarker)
  }
})
$('.square-nine').on('click', function () {
  if (currentMarker !== lastMarkerPlayed) {
    $('.square-nine').text(currentMarker)
    lastMarkerPlayed = currentMarker
  } else {
    $('.square-nine').text(oppositeMarker)
  }
})


require('./example')
