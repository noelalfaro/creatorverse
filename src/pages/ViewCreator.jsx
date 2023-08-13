import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewCreator() {
  const [creator, setCreator] = useState({});
  const { id } = useParams(); // Get the creator ID from the URL parameter
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        // Fetch the specific content creator's information based on the ID
        const { data, error } = await supabase
          .from("creators")
          .select()
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching creator:", error);
        } else {
          // Update the creator state with the fetched data
          setCreator(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching creator:", error);
      }
    };

    fetchCreator();
  }, [id]); // The id dependency ensures this effect runs whenever the ID changes

  const deleteCreator = async (event) => {
    event.preventDefault();
    try {
      await supabase.from("creators").delete().eq("id", id);
      navigate("/show-creators");
      alert("Creator Deleted");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      {loading ? (
        <progress></progress>
      ) : (
        <>
          <h2>View Creator</h2>
          <div>
            <h3>Name: {creator.name}</h3>
            <h3>Link: {creator.url}</h3>
            <h3>Description: {creator.description}</h3>
            <img
              src={creator.imageURL}
              width={"300px"}
              alt={creator.name + ".png"}
            />
          </div>

          <Link to={`/edit-creator/${id}`}>
            <button>Edit Creator</button>
          </Link>

          <button onClick={deleteCreator} style={{ backgroundColor: "red" }}>
            Delete Creator
          </button>
          <button
            onClick={() => {
              navigate("/show-creators");
            }}
          >
            Go to Creator Feed
          </button>
        </>
      )}
    </>
  );
}

export default ViewCreator;
