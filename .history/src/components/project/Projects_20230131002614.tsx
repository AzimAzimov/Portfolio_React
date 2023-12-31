import React, { FC } from 'react'

import { IMainProjects } from '../mainProjects/MainProjects';
import { IMainProjectsData } from '../mainProjects/MockData';
import ButtonGitHub from '../buttonGit/ButtonGitHub';


const Project: FC<IMainProjects> = ({imgBig, title}) => {
  return (
    <li className="project">
      <a href={}>
        <img src="./img/projects/01.jpg" alt="Project img" className="project__img" />
        <h3 className="project__title">Gaming streaming portal</h3>
      </a>
    </li>
  );
};

export default Project;