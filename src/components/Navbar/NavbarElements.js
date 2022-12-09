import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 2rem ;
    z-index: 10;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    box-shadow: rgba(0, 0, 0, 0.29) 0px 10px 20px, rgba(0, 0, 0, 0.33) 0px 8px 8px, rgba(0, 0, 0, 0.53) 0px 3px 3px;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
        &.active{
            color: #15cdfc;
    }
    &:hover{
        color: #15cdfc;
        transition: all 0.3s ease-in-out;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;

    @media screen and (max-width: 750px) {
        display: none;    
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    }
`

export const NavBtnLink = styled(Link)` 
    width:100px;
    background-color: none;
    height:50px;
    text-decoration: none;
    text-align: center;  
    img {
        width:100px;
        background-color: none;
        height:50px;
        transition: 300ms all ease-in-out;
        transform: scale(1);

        &:hover {
            transition: 300ms all ease-in-out;
            transform: scale(1.2);
        }
    }
    p{
        position:relative;
        width:fit-content;
        left: 10px;
        top:-20px;
        background-color: rgb(163, 53, 53);
        color:black;
        text-decoration: none;
        padding:2px 10px;
        border-radius: 50%;
        border:2px ridge silver;
    }
`
