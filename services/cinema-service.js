const CinemaModel = require('../models/cinema')
const SeatModel = require('../models/seat')

async function addSeat(cinemaId, seatId) {
    const cinema = await CinemaModel.findOne({ _id: cinemaId })
    const seat = await SeatModel.findOne({ _id: seatId })

    return await cinema.updateOne({$addToSet: { seats: seat }})
}

async function findAll() {
    return CinemaModel.find().populate('seats')
}

async function add(cinema) {
    return CinemaModel.create(cinema)
}

async function del(_id) {
    return CinemaModel.deleteOne({ _id })
}

async function delAll() {
    return CinemaModel.deleteMany({})
}

async function find(_id) {
    return CinemaModel.findOne({ _id }).populate('seats')
}

module.exports = {
    addSeat,
    findAll,
    find,
    add,
    del,
    delAll
}
