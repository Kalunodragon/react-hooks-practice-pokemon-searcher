import React, { useState } from "react";

function Search({ handleSearch }) {
  const [inputText, setInputText] = useState('')

  function handleChange(e){
    const input = e.target.value
    setInputText(input)
    if(input === ''){
      handleSearch('Show All Pokemon')
    } else {
      handleSearch(input)
    }
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          placeholder="Search"
          onChange={handleChange}
          value={inputText}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
