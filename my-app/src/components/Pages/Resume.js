import React from 'react';
import { Document } from 'react-pdf';
import "./Pages.css";
import "./Resume.css";


import prom from './images/promheadshot.png';
import UofI from './images/UofI.png';
import grad from './images/northern.png';
import ESTAR from './images/estar.png';
import CTAASA from './images/ctaasa.png';
import AWS from './images/AWS-SolArchitect-Associate.png';
import eagle from './images/eagle.png';
import java from './images/java.png';
import cplus from './images/c++.png';
import star from './images/starRate.png';
import c from './images/c.png';
import python from './images/python.png';
import react from './images/react.png';
import html from './images/html.png';
import awslogo from './images/awslogo.png';
import redstone from './images/redstone.png';


const aboutme = () => {
    return (
       <div>
          <main className="body">
            <h1 className="header" style={{textAlign: 'center'}}>RESUME</h1>
            <h2><img src={prom} className="prom-pic"/></h2>
            <br></br>
            <h2 className="subheader">Rohit Narayanan</h2>
            <p className="text1">Scroll down and hover to view my resume or 
            click <a className="resumeLink" href="https://drive.google.com/file/d/1PiUGXksFNeVbCqNuMBQdK_BR9vPqnj3G/view?usp=sharing" download>HERE</a> for a PDF copy.</p>
            <body className="aboutMeBody">
              <ul> <h3>Education:</h3>
                 
                 <li>
                    <img src={UofI} align="left" style={{width: '200px'}}/>
                    <p>
                       <h4>University of Illinois at Urbana-Champaign: B.S. in Computer Engineering, 2023</h4>
                       <ul className="itemList">
                          <li> - GPA: 3.87 Overall</li>
                          <li> - James Scholar</li>
                          <li> - Relevant Course Work: Data Structures, Discrete Math, Computer Systems and 
                             <br></br>Programming, Linear Algebra, Differential Equations
                             
                           </li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={grad} align="left" style={{width: '200px'}}/>
                    
                    <p>
                       <h4>Northern Burlington County Regional High School - Columbus, NJ</h4>
                       <ul className="itemList">
                          <li> - Class of 2019</li>
                          <li> - GPA: 4.0 UW</li>
                          <li> - National Honor Society and Chinese National Honor Society</li>
                       </ul>
                    </p>
                 </li>
              </ul>
              <br></br>

              <br></br>
              <ul>
                 <h3>Employment History:</h3>
                 <li>
                 <img src={ESTAR} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>Engineering Tour Guide - Grainger College of Engineering - Urbana, IL <br></br> January 2020-</h4>
                       
                       <ul className="itemList">
                          <li>Guided prospective students and families on tour of The Grainger College <br></br>
                          of Engineering at the University of Illinois to persuade them to attend.</li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={CTAASA} align="left" style={{width: '200px'}}/>
                    <p>
                       <h4>Junior Counselor - CTAASA - Chesterfield, NJ <br></br> July 2015 - August 2018</h4>
                       
                       <ul className="itemList">
                          <li>Supervised campers throughout their daily activities and educated them<br></br>
                          on substance abuse and bullying.</li>
                       </ul>
                    </p>
                 </li>
              </ul>
              <br></br>

              <br></br>
              <ul>
                 <h3>Technical Skills:</h3>
                 <li>
                 <img src={java} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>Java</h4>
                       
                       <ul className="itemList">
                          <li><div className="star">
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                           </div>
                          </li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={cplus} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>C++</h4>
                       
                       <ul className="itemList">
                          <li><div className="star">
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                           </div>
                          </li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={c} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>C</h4>
                       
                       <ul className="itemList">
                          <li><div className="star">
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                           </div>
                          </li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={python} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>Python</h4>
                       
                       <ul className="itemList">
                          <li><div className="star">
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                           </div>
                          </li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={react} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>React.js</h4>
                       
                       <ul className="itemList">
                          <li><div className="star">
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                           </div>
                          </li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={html} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>HTML/CSS</h4>
                       
                       <ul className="itemList">
                          <li><div className="star">
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                           </div>
                          </li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={awslogo} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>Amazon Web Services</h4>
                       
                       <ul className="itemList">
                          <li><div className="star">
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                          <img src={star} style={{width: '150px'}}/>
                           </div>
                          </li>
                       </ul>
                    </p>
                 </li>
              </ul>
              <br></br>

              <br></br>
              <ul>
                 <h3>Certifications and Achievements:</h3>
                 <li>
                 <img src={AWS} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>Amazon Web Services Certified Solutions Architect Associate<br></br> June 15th, 2020</h4>
                       
                       <ul className="itemList">
                          <li>Completed and passed certification exam highlighting my full understanding
                             <br></br>  of AWS resources</li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
                 <li>
                 <img src={eagle} align="left" style={{width: '200px'}}/>
                    <p>
                       <h4>Eagle Scout - Boy Scouts of America<br></br> February 11th, 2019</h4>
                       
                       <ul className="itemList">
                          <li>Achieved through completion of requirements and merit badges and overall 
                             <br></br>demonstration of leadership.</li>
                       </ul>
                    </p>
                 </li>
              </ul>
              <br></br>

              <br></br>
              <ul>
                 <h3>Hobbies and Extracurricular Involvement:</h3>
                 <li>
                 <img src={redstone} align="left" style={{width: '200px'}}/>
                    <p></p>
                    <p>
                       <h4>Code Redstone</h4>
                       
                       <ul className="itemList">
                          <li>President and Co-Founder</li>
                          <li>Developing Computer Architecture using Minecraft's "Redstone" fascilities.</li>
                       </ul>
                    </p>
                 </li>
                 <br></br>
              </ul>
              <br></br>
           </body>
            </main>
       </div>
    );
}
 
export default aboutme;