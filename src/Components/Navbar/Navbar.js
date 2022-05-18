import React from 'react';
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/images/nav-logo.png"
import './navbar.css'
import { FontAwesomeIcon, faUser, faMagnifyingGlass, faRightFromBracket, faBars } from '../../Assets/icons/icons'

const Navbar = () => {
    return (
        <nav className="navbar" >
            <div className="nav-logo">
                <img src={NavLogo} alt="arcade logo" />
            </div>
            <div className="nav-items">
                <Link to="/" className="nav-link sm-title hide-md">Quiz Up</Link>
            </div>
            <div className="nav-space"></div>
            <div className="nav-icon-items">
                <div className="nav-search-bar hide-sm">
                    <input className="search-bar" type="text" placeholder="Search.." />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-search" />
                </div>
                <FontAwesomeIcon icon={faUser} className="btn icon-btn hide-md dark-bg-icon" />
                <FontAwesomeIcon icon={faRightFromBracket} className="btn icon-btn hide-md dark-bg-icon" />
                <FontAwesomeIcon icon={faBars} className="btn icon-btn show-md dark-bg-icon" />
            </div>
        </nav>
    )
}

export { Navbar }