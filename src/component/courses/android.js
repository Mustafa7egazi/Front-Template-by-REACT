import React from "react";
import img13 from '../imgs/13.jpg';
import img14 from '../imgs/14.jpg';
import img15 from '../imgs/15.jpg';
import img16 from '../imgs/5.jpg';
import img17 from '../imgs/17.jpg';
import img18 from '../imgs/18.jpg';
import './front.css';

const Android = () => {
    return(
        <div className="coursecontainer">
            <div className="first">
                <div className="sub-first">
                    <img src={img13}/>
                    <p className="head">Learn XML</p>
                    <p className="desc">XML stands for eXtensible Markup Language.
                        XML was designed to store and transport data.
                        XML was designed to be both human- and machine-readable.</p>
                    <p className="price"><span>75$</span>50$</p>
                </div>
                <div className="sub-first">
                    <img src={img14}/>
                    <p  className="head">Learn AJAX</p>
                    <p className="desc">AJAX is a developer's dream, because you can:
                        Update a web page without reloading the page
                        Request data from a server - after the page has loaded</p>
                    <p className="price"><span>140$</span>80$</p>
                </div>
                <div className="sub-first">
                    <img src={img15}/>
                    <p  className="head">Learn Java</p>
                    <p className="desc">Java is a popular programming language.
                       Java is used to develop mobile apps, web apps, desktop apps, games and much more.
                       : latest 2021</p>
                    <p className="price"><span>130$</span>60$</p>
                </div>

                
            </div>

            {/*************************************************************** */}

            <div className="second">
                <div className="sub-second">
                    <img src={img16}/>
                    <p  className="head">Learn object-oriented programming</p>
                    <p className="desc">The object-oriented programming model has been criticized by developers for multiple reasons.
                     The largest concern is that OOP overemphasizes the data component of software development and
                     does not focus enough on computation or algorithms.</p>
                    <p className="price"><span>110$</span>70$</p>
                </div>
                <div className="sub-second">
                    <img src={img17}/>
                    <p className="head">Learn Android Basics in Kotlin</p>
                    <p className="desc">In this course, you’ll learn the basics of building Android apps with the Kotlin programming language.
                     Along the way, you'll develop a collection of apps to start your journey as an Android developer.</p>
                    <p className="price"><span>90$</span>50$</p>
                </div>
                <div className="sub-second">
                    <img src={img18}/>
                    <p className="head">Build your first Android app in Java</p>
                    <p className="desc">This codelab is for Java programmers who are new to Android.
                     You will learn how to build your first Android app using Android Studio, how to run your app on a device or emulator,
                     and how to add an interactive button that displays a second screen when the button is clicked.</p>
                    <p className="price"> <span>88$</span>   40$</p>
                </div>
            </div>
                  
        </div>
    )
}
export default Android;