import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import "../components/CSS/Characters.css";
import { Link } from "react-router-dom";

function Characters({ search, setSearch }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pn-marvel-project.herokuapp.com"
      );
      setData(response.data);
      setIsLoading(false); // une fois que l'information est récupérée changer le state en false
    };

    fetchData();
  }, []);

  return (
    <div>
      <menu>
        <div className="search-menu">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </menu>
      {isLoading === true ? (
        <p>Marvel's page is loading...</p>
      ) : (
        <div>
          {data.data.results.map((character, index) => {
            return (
              <Link
                key={character.id}
                className="character-list"
                to={"/characters/" + character.id}
              >
                <div>
                  <div className="character-sheet">
                    <img
                      src={
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      }
                      alt="Marvel picture"
                    />
                    <div className="character-name-and-description">
                      <div>{character.name}</div>
                      <div>{character.description}</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Characters;
