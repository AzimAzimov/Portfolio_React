import React, { FC } from 'react'

import { IMainProjects } from '../mainProjects/MainProjects';
import { IMainProjectsData } from '../mainProjects/MockData';
import ButtonGitHub from '../buttonGit/ButtonGitHub';


const Projects: FC<IMainProjects> = () => {
  return (
    <main className="section">
      <div className="container">
        {IMainProjectsData.map(items => {
          return (
            <div key={items.id} className="project-details">
              <h1 className="title-1">{items.title}</h1>
              <img src={items.imgBig} alt={items.title} className="project-details__cover" />
              <div className="project-details__desc">
                <p>{items.desc}</p>
              </div>
              <ButtonGitHub link="" /> 
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BigProject