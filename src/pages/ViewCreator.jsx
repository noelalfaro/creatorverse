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
      navigate("/");
      alert("Creator Deleted");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent the card's click event from firing
    window.open(creator.url, "_blank"); // Open the external URL in a new tab
  };

  return (
    <>
      {loading ? (
        <progress></progress>
      ) : (
        <>
          <div className="full-creator-container">
            <h2>{creator.name}</h2>
            <button onClick={handleButtonClick}>Visit Their Page</button>
            <h3>{creator.description}</h3>
            <img
              src={creator.imageURL}
              // width={"300px"}
              alt={creator.name + ".png"}
            />
          </div>

          <div className="menu-container">
            <Link to={`/edit-creator/${id}`}>
              <button>Edit Creator</button>
            </Link>

            <button onClick={deleteCreator} style={{ backgroundColor: "red" }}>
              Delete Creator
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Creator Feed
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default ViewCreator;
