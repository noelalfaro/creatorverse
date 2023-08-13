import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { supabase } from "../client";
// import {propgress} from  @picocss/pico
export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from("creators").select();
      setCreators(data);
      setLoading(false);
    };

    fetchCreators();
  }, []);

  return (
    <>
      {loading ? (
        <progress></progress>
      ) : (
        <>
          <h2>ShowCreators</h2>
          <Link to={"/add-creator"}>
            <button>Add Creator</button>
          </Link>
          <Link to={"/"}>
            <button>Go Home</button>
          </Link>
          {creators && creators.length > 0 ? (
            <div className="cards-container">
              {creators.map((creator) => (
                <Card
                  name={creator.name}
                  url={creator.url}
                  description={creator.description}
                  img={creator.imageURL}
                  id={creator.id}
                  key={creator.id}
                />
              ))}
            </div>
          ) : (
            <h3>There are no creators in the database yet</h3>
          )}
        </>
      )}
    </>
  );
}
