import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to = "/">
      <img src = {logo} alt = "Логотип"/>
    </Link>
  );
}

export default Logo;
