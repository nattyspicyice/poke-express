import React, {Component} from 'react'


// export default function Show({pokemon}) {
//   return (
//     <html style={{
//         height:'100%',
//         backgroundColor: "lightblue",
//         fontFamily: "Monaco",
//         textAlign: "center",
//         }}>
//         <div>
//             <h1>Gotta Catch 'Em All!</h1>
//             <h2>
//                 {pokemon.name}
//             </h2>
//             <img style={{border: "solid"}} src={`${pokemon.img}.jpg`} />
//             <br />
//             <a href="/pokemon">Back</a>
//         </div>
//     </html>
//   )
// }

class Show extends Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <html style={{
                height:'100%',
                backgroundColor: "lightblue",
                fontFamily: "Monaco",
                textAlign: "center",
                }}>
                <div>
                    <h1>Gotta Catch 'Em All!</h1>
                    <h2>
                        {pokemon.name}
                    </h2>
                    <img style={{border: "solid"}} src={`${pokemon.img}`} />
                    <br />
                    <a href="/pokemon">Back</a>
                </div>
            </html>
    )
  }
}

module.exports = Show