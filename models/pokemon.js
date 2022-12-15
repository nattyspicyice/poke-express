const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: false
    }})

const Pokemon = mongoose.model("Pokemon", pokemonSchema)
module.exports = Pokemon