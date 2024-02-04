import React, { useState } from "react";
import "./styles/Search.css";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
        value={search}
      />
      <button>Search</button>
    </div>
  );
}
