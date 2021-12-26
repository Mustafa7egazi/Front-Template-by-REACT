import React from "react";
import img7 from '../imgs/7.jpg';
import img8 from '../imgs/8.jpg';
import img9 from '../imgs/9.jpg';
import img10 from '../imgs/10.jpg';
import img11 from '../imgs/11.jpg';
import img12 from '../imgs/12.jpg';
import './front.css';

const Back = () => {
    return(
        <div className="coursecontainer">
            <div className="first">
                <div className="sub-first">
                    <img src={img7}/>
                    <p className="head">Learn Python</p>
                    <p className="desc">Python is a popular programming language. 
                    Python can be used on a server to create web applications. : latest 2022</p>
                    <p className="price"><span>75$</span>50$</p>
                </div>
                <div className="sub-first">
                    <img src={img8}/>
                    <p  className="head">Java</p>
                    <p className="desc">Java is a popular programming language.
                       Java is used to develop mobile apps, web apps, desktop apps, games and much more.</p>
                    <p className="price"><span>140$</span>80$</p>
                </div>
                <div className="sub-first">
                    <img src={img9}/>
                    <p  className="head">Learn C++</p>
                    <p className="desc">C++ is a popular programming language.
                        C++ is used to create computer programs. : latest 2021</p>
                    <p className="price"><span>130$</span>60$</p>
                </div>

                
            </div>

            {/*************************************************************** */}

            <div className="second">
                <div className="sub-second">
                    <img src={img10}/>
                    <p  className="head">Learn PHP</p>
                    <p className="desc">PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.
                        PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP. : 2022</p>
                    <p className="price"><span>110$</span>70$</p>
                </div>
                <div className="sub-second">
                    <img src={img11}/>
                    <p className="head">Learn Node.js</p>
                    <p className="desc">Node.js is an open source server environment.
                        Node.js allows you to run JavaScript on the server. Learning by Examples latest : 2021</p>
                    <p className="price"><span>90$</span>50$</p>
                </div>
                <div className="sub-second">
                    <img src={img12}/>
                    <p className="head">Learn SQL</p>
                    <p className="desc">SQL is a standard language for storing, manipulating and retrieving data in databases.
                        Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.</p>
                    <p className="price"> <span>88$</span>   40$</p>
                </div>
            </div>
                  
        </div>
    )
}
export default Back;