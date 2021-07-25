import React from 'react'
import {Form, FormControl, Button } from 'react-bootstrap'

const SearchBox = () => {
  const transparentStyle = {
    'background-color': 'transparent', 
    'border': '1px solid white'
  };

  return (
    <>
      <Form className="d-flex">
          <FormControl
            style={transparentStyle}
            type="search"
            placeholder=""
            className="mr-2 transparent-input"
            aria-label="Search"
          />
          <Button variant="outline-light" style={{marginRight: "10px", marginLeft: "6px"}}><i className="fa fa-search"></i></Button>

      </Form>
    </>
  )
}

export default SearchBox;
