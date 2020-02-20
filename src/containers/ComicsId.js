import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../components/CSS/Comics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ComicsId() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/comics/" + id);
      setData(response.data);
      console.log("test" + response.data);

      setIsLoading(false); // une fois que l'information est récupérée changer le state en false
    };
    fetchData();
  }, []);

  return (
    <div classeName="selection-comics">
      {isLoading === true ? (
        <p>Hey Man! be patient, your page will be ready soon...</p>
      ) : (
        <div>
          {data.data.results.map((comic, index) => {
            return (
              <div classeName="comics-card">
                <div className="comic-title">{comic.title}</div>

                <img
                  className="comic-thumbnail"
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt="marvel's comics"
                />
                <div className="comics-button">
                  <button
                    onClick={() => {
                      // Gestion du post d'annonce si l'utilisateur n'a pas de compte ou n'est pas connecté
                      // 1. Check si un cookie existe
                      history.push("/favorites");
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="icon-star"
                    />{" "}
                    {""}
                    add to favorites
                  </button>
                  <button
                    CLASS
                    onClick={() => {
                      // Gestion du post d'annonce si l'utilisateur n'a pas de compte ou n'est pas connecté
                      // 1. Check si un cookie existe
                      history.push("/basket");
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={["fas", "star"]}
                      className="icon-star"
                    />{" "}
                    {""}
                    add to basket
                  </button>
                </div>
                <div className="description-wrapper">
                  <div className="comic-description">{comic.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ComicsId;
