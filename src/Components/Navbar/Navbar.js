import React from 'react';
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/nav-logo.png"
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
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
                <Link to='/login'>
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fa fa-solid fa-user"></i>
                    </button>
                </Link>
                <button id="dark-bg-icon" className="btn icon-btn show-md">
                    <i className="fas fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}

export { Navbar }