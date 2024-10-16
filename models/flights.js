const { Schema } = require('mongoose')




const flightSchema = new Schema (
    {
        airline: {type: String, required: true},
        flightNumber: {type: Number , required: true},
        price: {type: String, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: {type: Schema.Types.ObjectId, ref:'Airport'},
        arrivalAirport: {type: Schema.Types.ObjectId, ref: 'Airport'},
        departureDateTime: {type: String, required: true}


    },
    {timestamps: true}
)

module.exports = flightSchema