const people = [
  {
    name: 'Mihri',
    age: 32,
    credit: 100
  },
  {
    name: 'Armagan',
    age: 34,
    credit: 10
  },
  {
    name: 'Can',
    age: 33,
    credit: 0
  },
  {
    name: 'Omur',
    age: 30,
    credit: 5
  },
  {
    name: 'Mert',
    age: 34,
    credit: 30
  }
]

const cinemas = [
  {
    name: 'Babylon',
    location: [13.54, 52.32]
  },
  {
    name: 'Mall1',
    location: [13.42, 52.2]
  },
  {
    name: 'Postdamer Platz',
    location: [13.48, 52.12]
  }
]

const seats = [
  {
    code: '1A',
    price: 10,
    isPaid: false,
    reservationTime: 0
  },
  {
    code: '1B',
    price: 15,
    isPaid: false,
    reservationTime: 0
  },
  {
    code: '1C',
    price: 5,
    isPaid: false,
    reservationTime: 0
  },
  {
    code: '2A',
    price: 10,
    isPaid: false,
    reservationTime: 0
  },
]

module.exports = {
  people,
  cinemas,
  seats
}
