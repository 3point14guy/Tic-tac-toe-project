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
let clickCounter = 1
$(() => {
  // using this to make sure first marker is X
  $('.squares').on('click', function (event) {
    event.preventDefault() // Listening event for whenever any of the 9 sqrs are clicked
    if ($(event.target).text() === 'x' || $(event.target).text() === 'o') {
      return // if there is a marker there already, it wont overwrite
    } else if (clickCounter === 1) {
      $(event.target).text('x') // will play X on first move
      clickCounter++ // then add one to counter
      $('.instructions').text('O\'s turn')
    } else if (clickCounter % 2 === 0) { // if counter is even, O is played
      $(event.target).text('o')
      $('.instructions').text('X\'s turn')
      clickCounter++
    } else { // if counter is odd, X is played
      $(event.target).text('x')
      $('.instructions').text('O\'s turn')
      clickCounter++
    }
  })
})
// this resets the board at the end of a game
$(() => {
  let resetSquares = $('.squares').text() // linter says no-unused-vars, but it is used
  $('#reset-game').on('click', function () {
    resetSquares = $('.squares').text('')
    $('.win-view-x').hide()
    $('.win-view-o').hide()
    $('.tie-view').hide()
    $('.game-logo').hide()
    $('.title-hide').show(200)
    $('.instructions').show(250)
    $('.game-board').show(150)
    clickCounter = 1
    $('.instructions').text('X plays first')
  })
})
// tests for wins
$(() => {
  $('.squares').on('click', function (event) {
    event.preventDefault()
    if (
      ($('.square-one').text() === $('.square-two').text() && $('.square-one').text() ===
        $('.square-three').text() && $('.square-one').text() !== '') ||
      ($('.square-four').text() === $('.square-five').text() && $('.square-four').text() ===
        $('.square-six').text() && $('.square-four').text() !== '') ||
      ($('.square-seven').text() === $('.square-eight').text() && $('.square-seven').text() ===
        $('.square-nine').text() && $('.square-seven').text() !== '') ||
      ($('.square-one').text() === $('.square-four').text() && $('.square-one').text() ===
        $('.square-seven').text() && $('.square-one').text() !== '') ||
      ($('.square-two').text() === $('.square-five').text() && $('.square-two').text() ===
        $('.square-eight').text() && $('.square-two').text() !== '') ||
      ($('.square-three').text() === $('.square-six').text() && $('.square-three').text() ===
        $('.square-nine').text() && $('.square-three').text() !== '') ||
      ($('.square-one').text() === $('.square-five').text() && $('.square-one').text() ===
        $('.square-nine').text() && $('.square-one').text() !== '') ||
      ($('.square-three').text() === $('.square-five').text() && $('.square-three').text() ===
        $('.square-seven').text() && $('.square-three').text() !== '')) {
      $('.game-board').hide()
      $('.win-view-x').show()
      const clickCount = clickCounter - 1
      if (clickCount === 6 || clickCount === 8) {
        $('.instructions').text('O is the WINNER!')
      } else $('.instructions').text('X is the WINNER!')
    } else if (clickCounter === 10) {
      $('.instructions').text('TIE GAME!')
      $('.tie-view').show()
      $('.game-board').hide()
    } else {
      // console.log('keep playing')
      return
    }
  })
})
require('./example')
