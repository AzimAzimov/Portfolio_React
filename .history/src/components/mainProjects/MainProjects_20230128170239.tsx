import React, { FC } from 'react'

import './MainHome.css';
import { IMainProjectsData } from './MockData';

export interface IMainProjects {
  id?: number;
  title?: string;
  img?: string;
}

const MainProjects: FC<IMainProjects> = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {IMainProjectsData.map(items => {
            return (
              <li className="project">
                <a href="./project-page.html">
                  <img src={items.img} alt={items.title} className="project__img" />
                  <h3 className="project__title">{items.}</h3>
                </a>
              </li>
            );
          })}
         
          <li className="project">
            <a href="./project-page.html">
              <img src="./img/projects/02.jpg" alt="Project img" className="project__img" />
              <h3 className="project__title">Video service</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img src="./img/projects/03.jpg" alt="Project img" className="project__img" />
              <h3 className="project__title">Video portal</h3>
            </a>
          </li>
          <li className="project">
            <img src="./img/projects/04.jpg" alt="Project img" className="project__img" />
            <h3 className="project__title">Dating app</h3>
          </li>
          <li className="project">
            <img src="./img/projects/05.jpg" alt="Project img" className="project__img" />
            <h3 className="project__title">Landing</h3>
          </li>
          <li className="project">
            <img src="./img/projects/06.jpg" alt="Project img" className="project__img" />
            <h3 className="project__title">Gaming community</h3>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MainProjects;