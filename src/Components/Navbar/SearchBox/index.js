import React from 'react'
import {Form, FormControl, Button } from 'react-bootstrap'

const Index = () => {
  return (
    <>
      <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            style={{backgroud:"Transparent", border: "none"}}
          />
          <Button variant="outline-light" style={{marginRight: "10px", marginLeft: "6px", border: "none"}}><i className="fa fa-search"></i></Button>

      </Form>
    </>
  )
}

export default Index
