import React, { useState } from "react";
import "./CSS/SearchBar.css";
import axios from "axios";

function SearchBar({ setData }) {
  const [search, setSearch] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get(
      `https://pn-marvel-project.herokuapp.com/characters/?name=${search}`
    );
    setData(response.data);
    console.log(response.data);
  };

  const isSearch = [];

  return (
    <div className="searchbar">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="hey-man"
            type="text"
            value={search}
            placeholder="Hey man! what do you search?"
            onChange={event => {
              setSearch(event.target.value);
            }}
          ></input>

          <button className="submit" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
