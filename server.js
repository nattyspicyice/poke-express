require('dotenv').config();
const express = require('express')
// const pokemon = require("./models/pokemon")
const app = express()
const mongoose = require("mongoose");
const Pokemon = require('./models/pokemon');
const port = 5500

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

//MIDDLEWARE
app.use((req, res, next) => {
    console.log("i run for all routes")
    next();
})
app.use(express.urlencoded({extended:false}));

//CONNECT TO MONGOOSE AND REMOVE DEPRICATION WARNINGS
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

//INDUCES - Index, New, Delete, Update, Create, Edit, Show

//INDEX ROUTE
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => { 
        res.render("Index", {pokemon: allPokemon})
    })
})

//NEW ROUTE
app.get("/pokemon/new", (req, res) => {
    res.render("New");
})

//UPDATE ROUTE
app.post('/pokemon', (req, res) => {
    //pokemon.push(req.body)
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

//SHOW ROUTE
app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
      res.render('Show', {
        pokemon: foundPokemon
      });
    });
  });
// app.get("/pokemon/:id", (req, res) => {
//     // Pokemon.findById(req.params.id, (err, foundPokemon) => {
//     //     res.send(foundPokemon)
//     // })
    
//     res.render("Show", {pokemon: pokemon[req.params.id]})
// })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})