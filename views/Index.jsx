import React, {Component} from "react";

class Index extends Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <html
        style={{
          height: "100%",
          backgroundColor: "lightblue",
          fontFamily: "Monaco",
          margin: "50px",
        }}>
        <div>
          <nav>
            <a href="/pokemon/new">Add to the Pokedex!</a>
            <img
              src="https://i.imgur.com/rRKtN1B.jpeg"
              style={{
                display: "block",
                alignItems: "center",
                justifyContent: "center",
                border: "solid",
                width: "600px",
                margin: "auto",
              }}
            />
          </nav>
          <h1 style={{ textAlign: "center" }}>See All The Pokemon</h1>
          <ul>
            {pokemon.map((pokemon, i) => {
              return (
                <li key={i} style={{}}>
                  <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a><br />
                  <a href = {`/pokemon/${pokemon._id}/edit`}>Edit Pokemon</a>
                  <form action ={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete Pokemon" />
                  </form>
                </li>
              );
            })}
          </ul>
        </div>
      </html>
    );
  }
}

module.exports = Index