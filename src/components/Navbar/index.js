import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = ({ count, imgIcon }) => {
  return (
      <Nav>
        <NavLink to='/'>
          <h1>CATS4LYF</h1>
        </NavLink>
        <NavMenu>
          <NavLink to='/' >Home</NavLink>&nbsp&nbsp
          <NavLink to='/CatInfo' >Most In Need</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Cart'>
            <img alt="cat sat in shopping basket" src={imgIcon} />
            <p>{count}</p>
          </NavBtnLink>
        </NavBtn>
      </Nav>
  );
};

export default Navbar;