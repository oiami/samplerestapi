# samplerestapi
Sample Rest API with no logic

To install dependencies:
`npm install`

To run the code:
`node index.js`

- Make sure that mongoDB is up and running:
`mongod`

To create fixture data:
`node fixture/datadump.js`

ATTENTION: This code cleans the whole database and creates it with the defined fixture data
-----

API Documentation:

Person Services:

1. List of people
http://localhost:3000/person/all (GET)

2. Detail of a specific person
http://localhost:3000/person/:personId (GET)

3. Create a person
http://localhost:3000/person (POST)

// body (JSON)
{
  "name": "Maria",
  "age": 32,
  "credit": 10
}

4. Delete a person
http://localhost:3000/person/:personId (DELETE)


Cinema Services:

1. List of cinemas
http://localhost:3000/cinema/all (GET)

2. Detail of a specific cinema
http://localhost:3000/cinema/:cinemaId (GET)

3. Create a cinema
http://localhost:3000/cinema (POST)

// body (JSON)
{
  "name": "Mall2",
  "location": [13.42, 52.2]
}

4. Delete a cinema
http://localhost:3000/cinema/:cinemaId (DELETE)

5. Add a seat to a cinema
http://localhost:3000/cinema/5c2e858e363c691b9a643de0/addSeat

// body (JSON)
{
  "seatId": "5c2e858e363c691b9a643ddc"
}


Seat Services:

1. List of seats
http://localhost:3000/seat/all (GET)

2. Detail of a specific seat
http://localhost:3000/seat/:seatId (GET)

3. Create a seat
http://localhost:3000/seat (POST)

// body (JSON)
{
  "code": "3B",
  "price": 10,
  "isPaid": false,
  "reservationTime": 0
}

4. Delete a seat
http://localhost:3000/seat/:seatId (DELETE)

1. List all available seats
http://localhost:3000/seat/available (GET)

1. List all available seats for selected cinema
http://localhost:3000/seat/cinema/:cinemaId (GET)

5. Purchase a seat
http://localhost:3000/seat/:seatId/purchase (POST)
// body (JSON)
{
    "personId": "5c2f5bcbf54dc1083f68a9ed"
}
