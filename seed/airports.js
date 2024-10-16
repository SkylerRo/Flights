const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [

    {
        name: 'John F Kennedy',
        location: 'Queens',
        code: 'JFK'
    },
    {
        name: 'Airport2',
        location:'New York',
        code: 'ABC'
    },
    {
        name: 'Airport3',
        location:'Texas',
        code: 'TLV'

    },
    {
        name: 'Airport24',
        location:'Maine',
        code: 'MND'

    }

    ]

    await Airport.insertMany(airports)
console.log('created brand and airports')
}

const run = async () => {
    await main ()
    db.close()
}

run()
