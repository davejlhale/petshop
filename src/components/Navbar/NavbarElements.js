import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -10px;
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;
export const NavBtn = styled.nav`

  display: flex;
  align-items: center;
  margin-right: 24px;
`;


export const NavBtnLink = styled(Link)`
  // border-radius: 4px;
  // background: #256ce1;
  // padding: 10px 22px;
  // color: #fff;
  // border: none;
  // outline: none;
  // cursor: pointer;
  // transition: all 0.2s ease-in-out;
  // text-decoration: none;

  &:hover {
    // transition: all 0.2s ease-in-out;
    // background: #fff;
    // color: #010606;
  }
`;
