import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Header(){

    const navigate = useNavigate();
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
                            <Link to={`/log`} className="about-name-link">
                                Log
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/discover`} className="contack-name-link">
                                Discover
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/feed`} className="feed-name-link">
                                Feed
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