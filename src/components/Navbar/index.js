import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import "./icon.css"

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
          <NavBtnLink id="cart-icon" to='/Cart'>
            <img alt="cat sat in shopping" src={imgIcon} />
            <p id="cart-item-count">{count}</p>
          </NavBtnLink>
        </NavBtn>
      </Nav>
  );
};

export default Navbar;