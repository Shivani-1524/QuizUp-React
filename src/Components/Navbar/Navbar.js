import React from 'react';
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/nav-logo.png"
import './navbar.css'
import { } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    let isLoggedIn = true;
    let iconStyles = { color: "white", fontSize: "1.5em" };
    return (
        <nav className="navbar" >
            <div className="nav-logo">
                <img src={NavLogo} alt="logo" />
            </div>
            <div className="nav-items">
                <Link to="/" className="nav-link sm-title hide-md">Quiz Up</Link>
            </div>
            <div className="nav-space"></div>
            <div className="nav-icon-items">
                <div className="nav-search-bar hide-sm">
                    <input className="search-bar" type="text" placeholder="Search.." />
                    <i className="fa fa-brands fa-searchengin"></i>
                </div>
                {/* <Link to="/login">
                    <FaUser className="btn icon-btn hide-md" />
                </Link> */}
                <FontAwesomeIcon icon={faUser} className="btn icon-btn hide-md dark-bg-icon" />
                {/* <Link to='/login'>
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <FaUser style={iconStyles} />
                    </button>
                </Link> */}
                {/* <Link to='/logout'>
                        <button onClick={handleUserLogout} id="dark-bg-icon" className="btn icon-btn hide-md">
                            <i className="fa fas fa-solid fa-arrow-right-from-bracket logout-icon"></i>
                        </button>
                    </Link> */}
                <button id="dark-bg-icon" className="btn icon-btn show-md">
                    <i className="fas fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}

export { Navbar }