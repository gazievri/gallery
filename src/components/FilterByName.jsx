import React, { useState, useEffect } from "react";

const Filter = ({ handleSearchByName }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    handleSearchByName(`&q=${value}`)
  }

  console.log(value)

  return (
    <input
      name="name"
      className="filters__filter"
      placeholder="Name"
      onKeyDown={handleKey}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Filter;
