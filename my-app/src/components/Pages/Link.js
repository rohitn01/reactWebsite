import React from 'react';
import "./Pages.css";
import "./Link.css";
import gitCat from "./images/github-logo.png";
import linkedIn from "./images/linkedin.png";
import spotify from "./images/Spotify.png";
import email from "./images/emailicon.png";
const link = () => {
    return (
      <div>
         <main className="body">
          <h1 className="header">CONTACT INFO</h1>
          <h2 className="icons">
             <p className="caption">Reach out to me!</p>
             <a href="mailto:rohitn2@illinois.edu"><img src={email} style={{width: '100px'}}/></a>
             <p className="caption">Check out my work!</p>
             <a href="https://github.com/rohitn01"><img src={gitCat} style={{width: '100px'}}/></a>

             <p className="caption">Connect with me!</p>
            <a href="https://www.linkedin.com/in/rohit-narayanan-17200819b/"><img src={linkedIn} style={{width: '100px'}}/></a>
             
            <p className="caption">Listen to my playlists!</p>
             <a href="https://open.spotify.com/user/rohitmen01?si=94lEYbApQV2tuw1qfVyzfQ"><img src={spotify} style={{width: '100px'}}/></a>
          <br></br>
          
          </h2>
         </main>
      </div>
    );
}
  
export default link;