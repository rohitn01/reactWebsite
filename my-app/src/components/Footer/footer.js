import React from 'react';
import './footer.css';

import spotify from '../Pages/images/Spotify.png';
import linkedin from '../Pages/images/linkedin.png';
import email from '../Pages/images/emailicon.png';
import git from '../Pages/images/github-logo.png';

const footer = () => {
    return (
        <div className="main-footer">
            <p>Rohit Narayanan
                <br></br>This website was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>
                <br></br>
                <a href="mailto:rohitn2@illinois.edu"><img src={email} style={{width: '40px'}}/></a>

                <a href="https://github.com/rohitn01"><img src={git} style={{width: '40px'}}/></a>
        
                <a href="https://www.linkedin.com/in/rohit-narayanan-17200819b/"><img src={linkedin} style={{width: '40px'}}/></a>
                <a href="https://open.spotify.com/user/rohitmen01?si=94lEYbApQV2tuw1qfVyzfQ"><img src={spotify} style={{width: '40px'}}/></a>
            </p>
        </div>
    )
}

export default footer;