import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBox = () => {
  const transparentStyle = {
    "background-color": "transparent",
    border: "1px solid white",
  };
  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setSearch(inputSearch);
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmitSearch}>
        <FormControl
          style={transparentStyle}
          type="search"
          placeholder="Please insert"
          className="mr-2 transparent-input"
          aria-label="Search"
          value={inputSearch}
          onChange={handleChange}
        />
        <Button
          variant="outline-light"
          style={{ marginRight: "10px", marginLeft: "6px" }}
          type="submit"
        >
          <i className="fa fa-search"></i>
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
