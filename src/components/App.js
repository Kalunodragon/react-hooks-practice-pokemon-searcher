import React from "react";
import PokemonPage from "./PokemonPage";

// App is the parent of PokemonPage
// PokemonPage is parent of PokemonForm, Search, PokemonCollection

/*
    Previous Deletes dont work because they arent getting the entire object (toy in toy tale)
    The whole object needs to be passed down then destructured in a const variable { x, y, z}
    This whole object needs to be passed back up using the callback function to then have
    access to its information, such as an id or (toyToDelete.id). In the previous toy tale
    there is no information being passed back to the callback because there is no data given back
    after the response from the delete fetch. 
*/

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
