import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import "./Button.css";


const Button: FC<ButtonI> = () => {
  return (
    <Link to={'/'} className="btn">
      <button>Download CV</button>
    </Link>
  );
};

export default Button