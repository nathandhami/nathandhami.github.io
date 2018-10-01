import React, { Component } from 'react';
import './App.scss';
import ContactCard from './ContactCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarButton from './NavbarButton';

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
