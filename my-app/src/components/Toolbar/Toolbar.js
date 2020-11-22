import React from 'react';
import zoop from './promheadshot.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { NavLink, Router } from 'react-router-dom';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo">
                <NavLink to="/reactWebsite"><img src={zoop} style={{width: '75px'}}/></NavLink>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul> 
                    <li><NavLink to="/aboutme" className="toolbar_navigation-NavLink">ABOUT ME</NavLink></li>
                    <li><NavLink to="/resume" className="toolbar_navigation-NavLink">RESUME</NavLink></li>
                    <li><NavLink to="/blogs" className="toolbar_navigation-NavLink">PROJECTS</NavLink></li>
                    <li><NavLink to="/links" className="toolbar_navigation-NavLink">CONTACT INFO</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;