const SeatModel = require('../models/seat')
const PersonModel = require('../models/person')

async function reserveASeat(seatId, personId) {
    const seat = await SeatModel.findOne({ _id: seatId })
    const person = await PersonModel.findOne({ _id: personId })

    seat.person = person
    seat.reservationTime = Date.now();

    await seat.save()

    return seat
}

async function findAll() {
    return SeatModel.find().populate('person')
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
    findAll,
    find,
    add,
    del,
    delAll
}
