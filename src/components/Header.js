import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return(
      <header className="uc-header">
        <h1 className="uc-header-logo"><a href="/">Yang</a></h1>
        <div className="uc-header-menu" role="navigation">
          <a href="" onClick={this.props.handleOpenModal}>About</a>
          <a href="mailto:ylu635@gatech.edu">Contact</a>
        </div>
      </header>
    );
  }
}

export default Header;