const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    credit: Number
})

module.exports = mongoose.model('Person', PersonSchema);
