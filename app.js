const express = require('express')
const bodyParser = require('body-parser')

const PersonService = require('./services/person-service')
const CinemaService = require('./services/cinema-service')
const SeatService = require('./services/seat-service')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// PERSON ENDPOINTS

app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.send(people)
})

app.get('/person/:id', async (req, res) => {
  const person = await PersonService.find(req.params.id)
  if (!person) res.status(404)
  res.send(person)
})

app.post('/person', async (req, res, next) => {
  const person = await PersonService.add(req.body)
  res.send(person)
})

app.delete('/person/:id', async (req, res) => {
  const person = await PersonService.del(req.params.id)
  res.send('Person is deleted!')
})

// CINEMA ENDPOINTS

app.get('/cinema/all', async (req, res) => {
  const cinemas = await CinemaService.findAll()
  res.send(cinemas)
})

app.get('/cinema/:id', async (req, res) => {
  const cinema = await CinemaService.find(req.params.id)
  if (!cinema) res.status(404)
  res.send(cinema)
})

app.post('/cinema', async (req, res) => {
  const cinema = await CinemaService.add(req.body)
  res.send(cinema)
})

app.post('/cinema/:id/addSeat', async (req, res) => {
  const addSeatToCinema = await CinemaService.addSeat(req.params.id, req.body.seatId)
  res.send(addSeatToCinema)
})

app.delete('/cinema/:id', async (req, res) => {
  await CinemaService.del(req.params.id)
  res.send('Cinema is deleted!')
})
module.exports = app

// SEAT ENDPOINTS

app.get('/seat/all', async (req, res) => {
  const seats = await SeatService.findAll()
  res.send(seats)
})

app.get('/seat/available', async (req, res) => {
  const seats = await SeatService.findAvailable()
  res.send(seats)
})

app.get('/seat/:id', async (req, res) => {
  const seat = await SeatService.find(req.params.id)
  if (!seat) res.status(404)
  res.send(seat)
})

app.get('/seat/cinema/:id', async (req, res) => {
  const seat = await CinemaService.findSeat(req.params.id)
  if (!seat) res.status(404)
  res.send(seat)
})

app.post('/seat', async (req, res, next) => {
  const seat = await SeatService.add(req.body)
  res.send(seat)
})

app.delete('/seat/:id', async (req, res) => {
  const seat = await SeatService.del(req.params.id)
  res.send('Seat is deleted')
})

app.post('/seat/:id/reserve', async (req, res) => {
  const reserveSeat = await SeatService.reserveASeat(req.params.id, req.body.personId)
  res.send(reserveSeat)
})

app.post('/seat/:id/purchase', async (req, res) => {
  const reserveSeat = await SeatService.purchaseSeat(req.params.id, req.body.personId)
  res.send(reserveSeat)
})
