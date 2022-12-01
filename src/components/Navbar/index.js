import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to='/'>
            <h1>CATS4LYF</h1>
        </NavLink>
        <NavMenu>
            <NavLink to='/' activeStyle>Home</NavLink>&nbsp&nbsp
            <NavLink to='/Cart' activeStyle>Cart</NavLink>&nbsp&nbsp
            <NavLink to='/CatInfo' activeStyle>CatInfo</NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/Checkout'>Checkout</NavBtnLink>
        </NavBtn>
        <Bars/>
    </Nav>
    </>
  );
};

export default Navbar;