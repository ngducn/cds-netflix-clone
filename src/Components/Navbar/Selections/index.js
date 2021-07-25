import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Index from '../SearchBox/index'
import './style.css'


const index = () => {
  return (
    <>
      <Navbar expand="lg" className="netflix-nav">
        <img className="net-img" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix_logo"></img>
        <Navbar.Toggle aria-controls="navbarScroll" style={{marginRight: "150px"}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color: "white", fontWeight:"500"}} href="#action1">Home</Nav.Link>
            <Nav.Link style={{color: "white", fontWeight:"500"}} href="#action2">TV Shows</Nav.Link>
            <Nav.Link style={{color: "white", fontWeight:"500"}} href="#action2">Movies</Nav.Link>
            <Nav.Link style={{color: "white", fontWeight:"500"}} href="#action2">New and popular</Nav.Link>
            <Nav.Link style={{color: "white", fontWeight:"500"}} href="#action2">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* SearchBox */}
        <Index/>
      </Navbar>
    </>
  )
}

export default index
