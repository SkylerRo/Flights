const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airport = await Airport.find({})
    console.log(airport._id)
    const flights = [
        {
        airline: 'Airline123',
        flightNumber: 222334,
        price: '$450',
        numberOfSeats: 54,
        departingAirport: airport[0]._id,
        arrivalAirport: airport[1]._id,
        departureDateTime: '12:23pm'
        },

        {
            airline: 'Airline43',
        flightNumber: 168362,
        price: '$1600',
        numberOfSeats: 200,
        departingAirport: airport[3]._id,
        arrivalAirport: airport[2]._id,
        departureDateTime: '1:56 am'
        },

        {
            airline: 'Airline23',
            flightNumber: 2,
            price: '$98',
            numberOfSeats: 12,
            departingAirport: airport[3]._id,
            arrivalAirport: airport[0]._id,
            departureDateTime: '8:30pm'
        },

        {
            airline: 'Airline123',
        flightNumber: 22,
        price: '$200',
        numberOfSeats: 94,
        departingAirport: airport[2]._id,
        arrivalAirport: airport[0]._id,
        departureDateTime: '3:56pm'
        },

        {
            airline: 'Airline13',
        flightNumber: 334,
        price: '$1100',
        numberOfSeats: 116,
        departingAirport: airport[1]._id,
        arrivalAirport: airport[0]._id,
        departureDateTime: '6:01pm'
        },

        {
        airline: 'Airline12',
        flightNumber: 34,
        price: '$40',
        numberOfSeats: 24,
        departingAirport: airport[2]._id,
        arrivalAirport: airport[1]._id,
        departureDateTime: '1:15pm'
        },

        {
            airline: 'Airline1',
        flightNumber: 4,
        price: '$70',
        numberOfSeats: 25,
        departingAirport: airport[1]._id,
        arrivalAirport: airport[0]._id,
        departureDateTime: '12:45 am'
        }
    ] 


    await Flight.insertMany(flights)
console.log('created brand and flights')
}

const run = async () => {
    await main ()
    db.close()
}

run()
