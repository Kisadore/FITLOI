import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Header(){
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul className="nav-links">
                        <li className="nav-item">
                            <Link to={`/`} className="home-name-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/about`} className="about-name-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/contact`} className="contack-name-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className="login-button" onClick={() => navigate('/login')}>Log In</button>
            </header>

        </>

    )
}
export default Header