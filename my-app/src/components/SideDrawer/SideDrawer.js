import React from 'react';
import './SideDrawer.css';
import { NavLink, Router } from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><NavLink to="/aboutme" className="side-drawer-navlink">ABOUT ME</NavLink></li>
                <li><NavLink to="/resume" className="side-drawer-navlink">RESUME</NavLink></li>
                <li><NavLink to="/blogs" className="side-drawer-navlink">PROJECTS</NavLink></li>
                <li><NavLink to="/links" className="side-drawer-navlink">CONTACT INFO</NavLink></li>
            </ul>
        </nav> 
    )};

export default sideDrawer;