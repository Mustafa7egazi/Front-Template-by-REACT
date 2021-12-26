import React from "react";
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpg';
import img3 from '../imgs/3.jpg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import img6 from '../imgs/6.jpg';
import './front.css';

const front = () => {
    return(
        <div className="coursecontainer">
            <div className="first">
                <div className="sub-first">
                    <img src={img1}/>
                    <p className="head">Java script from zero to hero</p>
                    <p className="desc">Learn modern java script and build your project without libraries or framworks : latest 2022</p>
                    <p className="price"><span>75$</span>50$</p>
                </div>
                <div className="sub-first">
                    <img src={img2}/>
                    <p  className="head">HTML Course</p>
                    <p className="desc">Learn how to build your website structure in easy way : latest 2022</p>
                    <p className="price"><span>140$</span>80$</p>
                </div>
                <div className="sub-first">
                    <img src={img3}/>
                    <p  className="head">CSS Course</p>
                    <p className="desc">Learn and practice styling your website structure and make it nice with us : latest 2021</p>
                    <p className="price"><span>130$</span>60$</p>
                </div>

                
            </div>

            {/*************************************************************** */}

            <div className="second">
                <div className="sub-second">
                    <img src={img4}/>
                    <p  className="head">Bootstrap</p>
                    <p className="desc">Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.
                        Bootstrap 5 is the newest version of Bootstrap 2022</p>
                    <p className="price"><span>110$</span>70$</p>
                </div>
                <div className="sub-second">
                    <img src={img5}/>
                    <p className="head">React JS</p>
                    <p className="desc">React is a JavaScript library for building user interfaces.
                           React is used to build single-page applications.
                            React allows us to create reusable UI components.</p>
                    <p className="price"><span>90$</span>50$</p>
                </div>
                <div className="sub-second">
                    <img src={img6}/>
                    <p className="head">jQuery</p>
                    <p className="desc">jQuery is a JavaScript Library.
                        jQuery greatly simplifies JavaScript programming.
                                  jQuery is easy to learn.</p>
                    <p className="price"> <span>88$</span>   40$</p>
                </div>
            </div>
                  
        </div>
    )
}
export default front;