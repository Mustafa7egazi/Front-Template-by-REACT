import React from "react";
import "./program.css";
import program1 from '../imgs/prog1.svg';
import program2 from '../imgs/prog2.svg';
import program3 from '../imgs/prog3.svg';

const Programs = () => {
    return(
        <div>
            <div className="programContainer">
                <h1>Our Programs</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis,<br/>
                    vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
            </div>
            <div className="prog1">
              
                <img src={program1} />

                <div className="prog1Content">
                    <h2>We Are Excellent In Education</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem maxime nam porro possimus fugiat quo molestiae illo</p>
                </div>
            </div>
        
{/* ********************************************** */}

            <div className="prog2">
                <div className="prog2Content">
                    <h2>We Are Excellent In Education</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem maxime nam porro possimus fugiat quo molestiae illo</p>
                </div>
                <img src={program2} />

                
            </div>
{/* ************************************************************** */}

            <div className="prog3">
              
              <img src={program3} />

              <div className="prog3Content">
                <h2>We Are Excellent In Education</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem maxime nam porro possimus fugiat quo molestiae illo</p>
              </div>
            </div>

        </div>
       
       
       
        
    )
}
export default Programs;