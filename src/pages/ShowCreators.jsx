import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { supabase } from "../client";
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
          <div className="creator-gallery">
            <h2>Creator Gallery</h2>

            {creators && creators.length > 0 ? (
              <>
                <div className="menu-container">
                  <Link to={"/add-creator"}>
                    <button>Add Creator</button>
                  </Link>
                  <Link to={"/about"}>
                    <button>About</button>
                  </Link>
                </div>
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
              </>
            ) : (
              <>
                <div className="menu-container">
                  <Link to={"/add-creator"}>
                    <button>Add Creator</button>
                  </Link>
                  <Link to={"/about"}>
                    <button>About</button>
                  </Link>
                </div>
                <h3>There are no creators in the database yet</h3>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
