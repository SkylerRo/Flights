const mongoose = require('mongoose')
const airportSchema = require('./airport')
const flightSchema = require('./flights')
const Flight = mongoose.model('Flight', flightSchema)
const Airport = mongoose.model('Airport', airportSchema)

module.exports = {
    Airport, Flight
}

