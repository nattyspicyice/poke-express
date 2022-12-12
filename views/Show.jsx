import React from 'react'
import pokemon from '../models/pokemon'

export default function Show({pokemons}) {
  return (
    <div>
        <h1>Gotta Catch 'Em All!</h1>
        <h2>
            {pokemons.name.charAt(0).toUpperCase()}
            {pokemons.name.slice(1)}
        </h2>
        <img src={`${pokemons.img}.jpg`} />
        <br />
        <a href="/pokemon">Back</a>
    </div>
  )
}