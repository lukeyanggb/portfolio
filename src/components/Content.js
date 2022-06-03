import React, { Component } from 'react';
import Works from '../components/Works';
import '../styles/Content.css';
import Pacman from '../img/logo.svg';


class Content extends Component {
  render() {
    return(
      <main className="uc-content">
      <img 
        src={Pacman}
        alt="Monkey face" 
      />
      
        <Works />
      </main>
    );
  }
}

export default Content;