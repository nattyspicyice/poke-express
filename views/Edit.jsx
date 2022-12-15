import React, {Component} from 'react'

class Edit extends Component {
    render(){
        const {pokemon} = this.props;
        console.log(pokemon)
        return(
            <div>
                <nav>
                    <a href ="/pokemon">Back</a>
                </nav>
                <h1>Edit Pokemon</h1>
                <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={pokemon.name}/><br />
                    Image URL: <input type="text" name="img" defaultValue={pokemon.img}/><br />
                    <input type="submit" name="submit changes" value="Add Changes" />
                </form>
            </div>
        )
    }
}

export default Edit;