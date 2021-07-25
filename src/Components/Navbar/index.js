import React from 'react'
import Selections from './Selections/index';

const Navbar = ({ scrolled }) => {
  return (
    <>
      <Selections notTransparent={scrolled}/>
    </>
  )
}

export default Navbar;
