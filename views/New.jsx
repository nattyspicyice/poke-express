const React = require('react')

class New extends React.Component {
    render(){
        return (
            <html style={{
                height:'100%',
                backgroundColor: "lightblue",
                fontFamily: "Monaco"
                }}>
                <div>
                    <h1>Add to the Pokedex!</h1>
                    <form action="/pokemon" method="POST">
                    Pokemon Name: <input type="text" name="name" /><br />
                    Image URL: <input type="text" name="img"/><br />
                    <input type="submit" name="submit" value="Add Pokemon" />
                    </form>
                </div>
           </html>
        )
    }
}

module.exports = New;