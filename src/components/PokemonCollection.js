import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList }) {
  const cardList = pokemonList.map(pokemon => {
    return (
      <PokemonCard key={pokemon.id} pokemonInfo={pokemon}/>
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
    {cardList}
    </Card.Group>
  );
}

export default PokemonCollection;
