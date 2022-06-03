import React, { Component } from 'react';
import WorksCard from '../components/WorksCard';
import '../styles/Works.css';

class Works extends Component {
  render() {
    return(
      <section className="works uc-section _center">
        <h2 className="uc-section-title">My Projects</h2>
        <p>Demos</p>
        <div className="uc-card-unit">
          <WorksCard />
        </div>
      </section>
    );
  }
}

export default Works;