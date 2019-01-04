const SeatModel = require('../models/seat')
const PersonModel = require('../models/person')

async function reserveASeat(seatId, personId) {
    const seat = await SeatModel.findOne({ _id: seatId })
    const person = await PersonModel.findOne({ _id: personId })

    const reservePeriod = Date.now() - seat.reservationTime
    // if the last reserve is more than 10 minute
    if (reservePeriod > 600000 && person.credit >= seat.price) {
        seat.person = person
        seat.reservationTime = Date.now()
    }
    await seat.save()

    return seat
}

async function purchaseSeat(seatId, personId) {
    const seat = await SeatModel.findOne({ _id: seatId, person: {_id: personId} })
    const person = await PersonModel.findOne({ _id: personId })
    const reservePeriod = Date.now() - seat.reservationTime
    // if the last reserve is more than 10 minute
    if (reservePeriod > 600000 && person.credit >= seat.price) {
        seat.isPaid = true
        person.credit = person.credit - seat.price
        seat.person = person
    }
    await person.save()
    await seat.save()

    return seat
}


async function findAll() {
    return SeatModel.find().populate('person')
}

async function findAvailable() {
    return SeatModel.find().populate('person')
    .nor([{ isPaid: true}, { reservationTime: { $ne: 0 } }])
}

async function add(seat) {
    return SeatModel.create(seat)
}

async function del(_id) {
    return SeatModel.deleteOne({ _id })
}

async function delAll() {
    return SeatModel.deleteMany({})
}

async function find(_id) {
    return SeatModel.findOne({ _id }).populate('person')
}

module.exports = {
    reserveASeat,
    purchaseSeat,
    findAll,
    findAvailable,
    find,
    add,
    del,
    delAll
}
