import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditCreator() {
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id);
      if (error) {
        console.error(error);
      } else {
        setCreator(data[0]);
      }
    };
    fetchData();
  }, [id]);

  const updateCreator = async (event) => {
    event.preventDefault();
    try {
      const name = event.target.elements.name.value;
      const url = event.target.elements.url.value;
      const description = event.target.elements.description.value;
      const imageURL = event.target.elements.imageURL.value;
      await supabase
        .from("creators")
        .update({ name, url, description, imageURL })
        .eq("id", id);

      navigate("/view-creator/" + id);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setCreator({ ...creator, [name]: value });
  };

  return (
    <>
      <h2>Edit Creator</h2>
      <form onSubmit={updateCreator}>
        <label htmlFor="name">
          <h3>Name:</h3>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          value={creator.name || ""}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor="name">
          <h3>URL:</h3>
        </label>
        <input
          type="text"
          id="url"
          name="url"
          autoComplete="off"
          value={creator.url || ""}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor="name">
          <h3>Description:</h3>
        </label>
        <input
          type="text"
          id="description"
          name="description"
          autoComplete="off"
          value={creator.description || ""}
          onChange={onChange}
        />
        <br />
        <label htmlFor="name">
          <h3>Image Link:</h3>
        </label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          autoComplete="off"
          value={creator.imageURL || ""}
          onChange={onChange}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
