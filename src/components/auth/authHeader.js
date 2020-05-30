import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blueLogo from '../../assets/img/logo_blue.png';
import whiteLogo from '../../assets/img/logo_white.png';
import '../../assets/css/auth/authHeader.css';

export default class AuthHeader extends Component {
  render = () => (
      <header className="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light py-3">
        <div className="container-fluid">
          <Link to="/" alt="logo" className="navbar-brand">
            <img
              src={blueLogo}
              alt="logo"
              width="25"
              className="mr-0 d-none d-lg-inline"
            />
            <img
              src={whiteLogo}
              alt="logo"
              width="75"
              className="mr-0 d-none d-sm-block d-lg-none"
            />
            <img
              src={whiteLogo}
              alt="logo"
              width="50"
              className="mr-0 d-sm-none"
            />
            <span
              className="lead font-weight-bold text-lg-primary d-none d-lg-inline">edukolab</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
