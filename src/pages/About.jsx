import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <h1>Welcome to the CreatorVerse</h1>
      <h2>
        A person's top content creators can say a lot about them. Do they prefer
        lockpicking videos 🔒, casual art streams 🖼️, or hustle-culture
        TikTokers 📱? This web app supports CRUD operations using the supabase
        API to create, read, update, and delete user input of a creator.
      </h2>
      <Link to={"/"}>
        <button>View All Creators</button>
      </Link>
    </>
  );
}
