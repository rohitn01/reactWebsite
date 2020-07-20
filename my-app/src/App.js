import React, { Component } from 'react'; // Basic import
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // In order to access different pages

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/footer';

import Home from './components/Pages/Home';
import AboutMe from './components/Pages/AboutMe';
import Resume from './components/Pages/Resume';
import Blogs from './components/Pages/Blogs';
import Links from './components/Pages/Link'; 
import Error from './components/Pages/Error';
class App extends Component{
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      
      <BrowserRouter>
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@700&family=Lato&family=Merriweather&family=Open+Sans&family=Ranchers&family=Teko&display=swap" rel="stylesheet"></link>
        <div className="page-container">
        <div className="content-wrap">
        <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/reactWebsite" component={Home} exact/>
          <Route path="/aboutme" component={AboutMe} exact/>
          <Route path="/resume" component={Resume} exact/>
          <Route path="/blogs" component={Blogs} exact/>
          <Route path="/links" component={Links} exact/>
          <Route component={Error}/>
        </Switch>
        </div>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
