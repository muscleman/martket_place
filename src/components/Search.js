import React, { useState } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
    onFormSubmit(e);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onTermSubmit(term);
  };

  return (
    <div className="search-container">
      <form onSubmit={onFormSubmit}>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={term}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
