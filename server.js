require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const Pokemon = require('./models/pokemon');
const port = 5500
const methodOverride = require('method-override')


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

//MIDDLEWARE
app.use((req, res, next) => {
    console.log("i run for all routes")
    next();
})
app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

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

//SEED ROUTE
app.get('/pokemon/seed', (req, res)=>{
    const seededPokemon =[
        {name: "Bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
        {name: "Ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
        {name: "Venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
        {name: "Charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
        {name: "Charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
        {name: "Squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
        {name: "Wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
    ]

    Pokemon.deleteMany({}).then((data) => {
        Pokemon.create(seededPokemon).then((data) => {
            res.redirect('/pokemon')
        })
    })
})

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
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
        console.log(updatedPokemon)
        res.redirect(`/pokemon/${req.params.id}`);
    });
});

//DELETE ROUTE
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, deletedPokemon) => {
        console.log(deletedPokemon)
        res.redirect('/pokemon');
    })
})

//CREATE ROUTE
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

//EDIT ROUTE
app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        if(!err){
            res.render(
                "Edit", {
                    pokemon: foundPokemon
                }
            );
        } else {
            res.send({ msg: err.message})
        }
    });
});

//SHOW ROUTE
app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
      res.render('Show', {
        pokemon: foundPokemon
      });
    });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})