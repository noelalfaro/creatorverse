import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, url, description, img, id }) {
  return (
    <>
      <Link key={id} to={`/view-creator/${id}`}>
        <div
          className="creator-card"
          onClick={() => {
            console.log("clicked on: " + name);
          }}
        >
          <h2>{name}</h2>

          <h4>{description}</h4>
          <img src={img} alt="creator-image" height="200px" />
        </div>
      </Link>
    </>
  );
}
