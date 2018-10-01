import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import githubLogo from './github-circle.svg';
import ContactCard from './ContactCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@material-ui/core/AppBar';
import NavbarButton from './NavbarButton';
import Particles from 'react-particles-js';
import purple from '@material-ui/core/colors/purple';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Nathan Dhami</h1>
            <NavbarButton>Home</NavbarButton>
        </header>
        <p className="App-intro">
        </p>        
        <div className="container">
          <ContactCard></ContactCard>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
