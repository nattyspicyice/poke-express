const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String, //i want this to be a url if possible
        require: false
    }})

const Pokemon = mongoose.model("Pokemon", pokemonSchema)
module.exports = Pokemon