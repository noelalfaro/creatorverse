import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ name, url, description, img, id }) {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent the card's click event from firing
    window.open(url, "_blank"); // Open the external URL in a new tab
  };

  return (
    <div
      className="creator-card"
      onClick={() => {
        console.log("clicked on: " + name);
        navigate(`/view-creator/${id}`); // Navigate within the app
      }}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={handleButtonClick}>Visit Their Page</button>
      <img src={img} alt="creator" />
    </div>
  );
}
