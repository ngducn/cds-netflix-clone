import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Index from '../SearchBox/index'
import './style.css'


const index = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" class="ml-2" style={{marginLeft: "10px"}}>Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{marginRight: "150px"}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">TV Shows</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action2">New and popular</Nav.Link>
            <Nav.Link href="#action2">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* SearchBox */}
        <Index/>
      </Navbar>
    </>
  )
}

export default index
