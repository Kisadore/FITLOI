import React from "react";
import "./Discover.css";

function Discover() {
    return(
        <>
            <h3 className="brainstorm-text">This will be the discover page where users can come, discover new workouts and add them to there favorites</h3>
            <div>
                <form className="search-workouts">
                    <input type="text" name="name" placeholder="find workouts" className="search-bar"/>
                    <input type="submit" value="Search" className="search-button" />
                </form>
            </div>
        </>
    )
}
export default Discover