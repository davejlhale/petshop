import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import "./icon.css"

const Navbar = ({ count, imgIcon }) => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to='/'>
          <h1>CATS4LYF</h1>
        </NavLink>
        <NavMenu>
          <NavLink to='/' activeStyle>Home</NavLink>&nbsp&nbsp
          {/* <NavLink to='/Cart' activeStyle>Cart</NavLink>&nbsp&nbsp */}
          <NavLink to='/CatInfo' activeStyle>CatInfo</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink id="cart-icon" to='/Cart'>
            <img alt="cat sat in shopping cart" src={imgIcon} />
            <p id="cart-item-count">{count}</p>
          </NavBtnLink>
        </NavBtn>
        <Bars />
      </Nav>
    </>
  );
};

export default Navbar;