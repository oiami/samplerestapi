const mongoose = require('mongoose')

const SeatSchema = new mongoose.Schema({
    code: String,
    price: Number,
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    isPaid: Boolean,
    reservationTime: Number
})

module.exports = mongoose.model('Seat', SeatSchema);
