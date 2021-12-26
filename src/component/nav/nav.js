import React from "react";
import "./nav.css";
import { Link , NavLink } from "react-router-dom";
import theImage from ".././imgs/logo.png";

const Nav = () => {
    return(
        <div className="container">
            <div className="sub-container">
                <div className="Nav">
                    <h1 className="logo" >MetaCourse</h1>
                    <ul>
                        <a className="list-item" href="#">Home</a>
                        <a className="list-item" href="#">Courses</a>
                        <a className="list-item" href="#">Programs</a>
                        <a className="list-item" href="#">Teacher</a>
                    
                    </ul>
                    <div className="buttons">
                        <button className="btn" >Sign in </button>
                        <button className="btn">Sign up</button>
                        <button className="btn" >Contact us</button>
                    </div>
                </div>
                <div className="heading">
                    <div className="text">
                        <h1>Learn From The Expert</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime ipsa 
                            nulla sed quis rerum amet natus quas necessitatibus.</p>
                            <button className="btn" id="addmission" >Addmission Now</button>
                    </div>
                    <div className="pic">
                        <img src={theImage} className="meta"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Nav;