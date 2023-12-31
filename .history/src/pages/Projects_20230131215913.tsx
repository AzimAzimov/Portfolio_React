import React, { FC } from 'react';

import MainProjects from '../components/mainProjects/MainProjects';

const Projects:FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {Project.map((items) => {
            return (
              <li key={items.title} className="project">
                <a href="./project-page.html">
                  <img src={items.img} alt={items.title} className="project__img" />
                  <h3 className="project__title">{items.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects