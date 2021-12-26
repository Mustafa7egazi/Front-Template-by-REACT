import React from "react";
import { Link,NavLink } from "react-router-dom";
import './courses.css';

const Courses= () =>
{
    return(
        <div className="course-link">
            <div className="courseheading"><b>Our Courses</b></div>
            <div className="ul-link">
                <ul className="that-ul">
                    <NavLink to="/front"> Front-End</NavLink>
                    <NavLink to="/back"> Back-End</NavLink>
                    <NavLink to="/android"> Android   </NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Courses;