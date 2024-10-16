const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Airport, Flight } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/airports', async (req, res) => {
    const airport = await Airport.find({})
    res.json(airport)
})

app.get('/airports/:id', async (req, res) => {
    try{
const{ id } = req.params
const airports = await Airport.findById(id)
if (!airports) throw Error('404 Airport not found')
    res.json(airports)
    }
    catch(e){
        console.log(e)
        res.send('Airport not found')

    }})

   //flights
app.get('/flight', async (req, res) => {
    const flight = await Flight.find({})
    res.json(flight)
})

app.get('/flight/:id', async (req, res) => {
    try{
const{ id } = req.params
const flight = await Flight.findById(id)
if (!flight) throw Error('404 Flight not found')
    res.json(flight)
    }
    catch(e){
        console.log(e)
        res.send('Flights not found')

    }
})










app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })