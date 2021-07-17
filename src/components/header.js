import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="container">
      <nav className="primary-nav">
        <h1 className="app-logo kaushan">
          <Link to="/">
            <span>{props.title}</span>
            <i className="fas fa-person-booth"></i>
          </Link>
        </h1>
        <Link className="btn-addphoto" to="/addphoto">
          <i className="fas fa-plus-square"></i>
        </Link>
      </nav>
    </header>
  );
}