const mongoose = require('mongoose')

const CinemaSchema = new mongoose.Schema({
    name: String,
    location: String,
    seats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat'
    }]
})

module.exports = mongoose.model('Cinema', CinemaSchema);
