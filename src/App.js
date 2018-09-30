import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import githubLogo from './github-circle.svg';
import ContactCard from './ContactCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    var cardStyle = {
      display: 'block',
      height: '200px'
    }
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Nathan Dhami</h1>
          <AppBar position="static">
            <button class="mdc-button">
              catfish
            </button>
          </AppBar>
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
