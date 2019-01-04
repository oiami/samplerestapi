const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cinemaunu', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongoose connected')
    })
    .catch(err => {
        console.log(err)
    })
