import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

// PokemonPage is parent of PokemonForm, Search, PokemonCollection

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState('All')

  const API = 'http://localhost:3001/pokemon'

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(d => setPokemonList(d))
  }, [])

  function handleSearch(input){
    if(input === 'Show All Pokemon'){
      setSearch('All')
    } else {
      const updatedList = pokemonList.filter((pokemon) => {
        return pokemon.name.toLowerCase().startsWith(input.toLowerCase())
      })
      setSearch(updatedList)
    }
  }

  function handleNewPokemon(newPokemon){
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(d => setPokemonList([d, ...pokemonList]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm submit={handleNewPokemon}/>
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokemonList={search === 'All' ? pokemonList : search}/>
    </Container>
  );
}

export default PokemonPage;
