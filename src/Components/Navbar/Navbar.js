import React from 'react';
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/images/nav-logo.png"
import './navbar.css'
import { FontAwesomeIcon, faUser, faMagnifyingGlass, faRightFromBracket, faBars, faCircleUser } from '../../Assets/icons/icons'
import { useAuth } from '../../Context/auth-context';

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth()
    const handleUserLogout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false)
    }
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
                {isLoggedIn ? <Link to="/profile"><FontAwesomeIcon icon={faCircleUser} className="btn icon-btn hide-md dark-bg-icon" /></Link> : <Link to="/login"><FontAwesomeIcon icon={faUser} className="btn icon-btn hide-md dark-bg-icon" /></Link>}
                {isLoggedIn && <Link to="/logout"><FontAwesomeIcon onClick={handleUserLogout} icon={faRightFromBracket} className="btn icon-btn hide-md dark-bg-icon" /></Link>}
                <FontAwesomeIcon icon={faBars} className="btn icon-btn show-md dark-bg-icon" />
            </div>
        </nav>
    )
}

export { Navbar }