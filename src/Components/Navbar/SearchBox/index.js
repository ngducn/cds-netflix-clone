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
          />
          <Button variant="outline-dark" style={{marginRight: "10px", marginLeft: "6px"}}><i className="fa fa-search"></i></Button>

      </Form>
    </>
  )
}

export default Index
