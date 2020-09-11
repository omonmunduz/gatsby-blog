import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from '@emotion/styled';
import { css } from '@emotion/core';


const NaviGation = styled(AniLink)`
    text-decoration:none;
    color:#DCED31;
    font-size: 1.333em;
    margin-right: 1rem;
    &.current-page {
        border-bottom:5px solid #DCED31;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

const Header = () => {

    return(
        <header
        css = {css`
            width:100vw;
            height:150px;
            display:flex;
            justify-content: space-between;
            background-color: #363537;
            align-items: center;
            padding: 0 calc((100vw - 550px)/2);
        `}>
            <NaviGation paintDrip to="/" duration={0.60} hex='#DCED31' >GSTBY</NaviGation>
            <nav>
                <NaviGation paintDrip to="/" duration={0.60} hex='#DCED31' activeClassName = "current-page">Home</NaviGation>
                <NaviGation fade to="/about" duration={0.60} hex='#DCED31' activeClassName = "current-page">About</NaviGation>
                <NaviGation fade to="/contact" duration={0.60} hex='#DCED31' activeClassName = "current-page">Contact</NaviGation>
            </nav>
            
        </header>
    )
};
export default Header;