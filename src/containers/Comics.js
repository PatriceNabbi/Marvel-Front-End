import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

function Comics() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pn-marvel-project.herokuapp.com/comics/"
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
        <p className="be-patient">
          Hey Man! be patient, your page will be ready soon...
        </p>
      ) : (
        <div>
          {data.data.results.map((comic, index) => {
            return (
              <Link key={comic.id} to={"/Comics/" + comic.id}>
                <div className="selection-comics">
                  <div>{comic.title}</div>
                  <div className="selection-comics">
                    <img
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      alt="marvel's comics"
                    />
                    <div>{comic.description}</div>
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

export default Comics;
