import React, { FC } from 'react';

import "./Header.css";


export interface IHeader {
  // id: number;
  // title: string;
  // link: string;
}

const Header: FC<IHeader> = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            {} <em>{}</em>
          </strong>
          <br />{}
        </h1>
        <div className="header__text">
          <p>{}</p>
        </div>
        <a href="#!" className="btn">
          {}
        </a>
      </div>
    </header>
  );
};

export default Header;
