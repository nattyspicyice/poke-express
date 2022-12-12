const express = require('express')
const pokemon = require("./models/pokemon")
const app = express()
const port = 5500

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

//GET ROUTES
app.get('/', (req, res)=> {
    res.send('Welcome to the Pokemon App!')
})
app.get('/pokemon', (req, res) =>{
    res.render("Index")
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})