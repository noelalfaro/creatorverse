import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>Welcome to the CreatorVerse</h1>
      <h2>View, Add, Edit, or Delete Creators to the database</h2>
      <Link to={"/show-creators"}>
        <button>View All Creators</button>
      </Link>
    </>
  );
}
