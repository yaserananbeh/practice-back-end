const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
app.use(cors())
app.use(express.json())


const mongoose = require("mongoose");
const PORT = process.env.PORT
const ApiHit = require('./controllers/apiHit.controller')
const {
    createFavorite, getFavorite, deleteFavorite, updateFavorite
} = require('./controllers/favorite.crud.controller')

mongoose.connect("mongodb://localhost:27017/practice", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });


app.get('/', (req, res) => {
    res.send('proof of live ')
})
app.get('/apidata', ApiHit)
//crud operations 
app.post('/favorit', createFavorite)
app.get('/favorit', getFavorite)
app.delete('/favorit/:name', deleteFavorite)
app.put('/favorit/:name', updateFavorite)



app.listen(PORT, () => {
    console.log(`running in ${PORT}`)
})