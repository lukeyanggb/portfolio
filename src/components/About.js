import React, { Component } from 'react';
import '../styles/About.css';
import background from "../img/japanese-garden.jpg"
import profileIcon from '../img/bird.png';

class About extends Component {
  render() {
    const myProfileCover = {
      backgroundImage: `url(${background})`
    }
    const myProfileIcon = {
      backgroundImage: `url(${profileIcon})`
    }
    return(
      <div className="uc-section _center">
        <div className="uc-section-title">About Me</div>
        <p>Hello,</p>
        <div className="uc-grid-unit">
          <div className="uc-grid">
            <div className="uc-card">
              <div className="uc-card-image" style={myProfileCover}></div>
              <div className="uc-card-header">
                <div className="uc-card-icon" style={myProfileIcon}></div>
                <div className="uc-card-title">Yang Lu</div>
              </div>
              <div className="uc-card-body">
                <p> I'm a master student in Computer Science at Gerogia Institute of Technology.</p>
                <p> I am passionate about technology. I enjoy coding, problem solving, and taking big challenges. Always strive to bring 100% to the work I do.</p>
                <p> I am specializd in computer system and have worked on multiple projects with topics such as software design, database design, cloud computing, UI design, interactive data visualization, machine learning, etc.</p>
                <p> My hobbies are photography and american football.</p>
              </div>
              <div className="uc-card-footer uc-grid _col-5 _small-col-3">
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://github.com/lukeyanggb" target="_blank"><i className="fa fa-github"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://www.linkedin.com/in/luke-yanglu/" target="_blank"><i className="fa fa-linkedin"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://www.instagram.com/lukeyangmu/" target="_blank"><i className="fa fa-instagram"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="mailto:ylu635@gatech.edu"><i className="fa fa-envelope"></i></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://github.com/lukeyanggb/lukeyanggb/blob/main/Resume.pdf"><i className="fa fa-file-pdf-o"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uc-btn-unit">
          <button className="uc-btn" onClick={this.props.handleCloseModal}><span>Close</span></button>
        </div>
      </div>
    );
  }
}

export default About;