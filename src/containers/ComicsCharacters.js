import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import "../components/CSS/ComicsCharacters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ComicsCharacters() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
  console.log("hello");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pn-marvel-project.herokuapp.com/characters/" + id
      );
      setData(response.data);
      console.log("test" + response.data);

      setIsLoading(false); // une fois que l'information est récupérée changer le state en false
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <p>Hey Man! be patient, your page will be ready soon...</p>
      ) : (
        <div className="comics-by-character">
          {data.data.results.map((result, index) => {
            return (
              <Link
                key={result.id}
                to={"/comics/" + result.id}
                className="link-for-comics"
              >
                <div className="comics-title-and-image">
                  <div className="title-per-characters-comics">
                    {/* <div>
                      {result.dates.map((date, index) => {
                        return <Moment format="YYYY">{date.date}</Moment>;
                      })}
                    </div> */}
                    <div>{result.title}</div>
                  </div>
                  <img
                    src={
                      result.thumbnail.path + "." + result.thumbnail.extension
                    }
                  ></img>
                  <div>
                    <div className="price">
                      {result.prices.map((price, index) => {
                        if (price.type > 5) {
                          price.type = "paper";
                        } else {
                          price.type = "digital";
                        }
                        return <div>{price.type + " " + price.price} $</div>;
                      })}
                    </div>
                  </div>
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
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ComicsCharacters;
