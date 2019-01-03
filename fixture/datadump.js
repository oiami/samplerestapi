/**
 * This code cleans the database and creates a fixture data
 */

const PersonService = require('../services/person-service')
const CinemaService = require('../services/cinema-service')
const SeatService = require('../services/seat-service')
const { people, cinemas, seats } = require('./initial-data')

require('../mongo-connection')

PersonService.delAll().then(() => {
  people.forEach(person => PersonService.add(person))
})

SeatService.delAll().then(() => {
  seats.forEach(seat => SeatService.add(seat))
})

CinemaService.delAll().then(() => {
  cinemas.forEach(cinema => CinemaService.add(cinema))
})

const addSeatsToACinema = async() => {
  let seatsOfTheCinema = await SeatService.findAll()
  let cinemas = await CinemaService.findAll()
  seatsOfTheCinema.forEach(seat => {
    CinemaService.addSeat(cinemas[0]._id, seat._id)
  })
}

setTimeout((function() {
  addSeatsToACinema()
}), 3000)

setTimeout((function() {
  console.log('Data is created')
  return process.kill(process.pid)
}), 5000)
