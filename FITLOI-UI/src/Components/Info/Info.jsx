import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Info.css";

function Info() {

    const navigate = useNavigate();

    return (
        <>
            {/* <h1 className="">hi</h1> */}
            <div className="info-text">
                <p className="info-prompt">Want to find new workouts and track your progress? Then FITLO is the place for you, Sign In to get started</p>
                <button className="login-info-button" onClick={() => navigate('/login')}>Log In</button>   
            </div>
        </>
    )
}
export default Info