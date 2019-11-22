import React, { useState } from "react";

export const SearchBar = props => {
  const [search, setSearch] = useState();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="search lyrics here"
      ></input>
    </div>
  );
};
