import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="uc-footer">
        <div className="uc-footer-menu">
          <a href="" onClick={this.props.handleOpenModal}>About</a>
          <a href="https://github.com/lukeyanggb" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/luke-yanglu/" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/lukeyangmu/" target="_blank">Instagram</a>
          <a href="mailto:ylu635@gatech.edu" target="_blank">Email</a>
        </div>
        <div className="uc-footer-logo"><cite>Yang</cite></div>
        <small>&copy; 2022 Yang Lu</small>
      </footer>
    );
  }
}

export default Footer;