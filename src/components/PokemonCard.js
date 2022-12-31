import React, { useState } from "react";
import { Card } from "semantic-ui-react";

/*

hp: 60
id: 2
name: "ivysaur"
sprites: 
    back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
    front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"

*/

function PokemonCard({ pokemonInfo }) {
  const [clicked, setClicked] = useState(false)
  const { hp, id, name, sprites } = pokemonInfo

  function changeImage(){
    setClicked(!clicked)
  }

  return (
    <Card>
      <div onClick={changeImage} id={id}>
        <div className="image">
          <img src={clicked ? sprites.back : sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            hp: {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
