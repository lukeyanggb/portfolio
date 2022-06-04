import React, { Component } from 'react';
import WorksCard from '../components/WorksCard';
import '../styles/Works.css';

class Works extends Component {
  render() {
    return(
      <section className="works uc-section _center">
        <h2 className="uc-section-title">My Projects</h2>
        <p>
        <a href="https://github.com/lukeyanggb" target="_blank" class="arrow-link">Repositories see my github</a>
        </p>
        <div className="uc-card-unit">
          <WorksCard />
        </div>
      </section>
    );
  }
}

export default Works;