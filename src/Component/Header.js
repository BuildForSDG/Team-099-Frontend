import React, { useState } from 'react';
import Logo from './assets/logo.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menu = <React.Fragment>
                <div className="menu">
                  <ul>
                    <li><a href="/">Courses</a></li>
                    <li><a href="/">Assessment</a></li>
                    <li><a href="/">Further Study</a></li>
                    <li><a href="/">About EduKolab</a></li>
                  </ul>
                </div>

                <div className="cta">
                  <a href="/" className="cta-login">Login</a>
                  <a href="/" className="cta-reg">Register</a>
                </div>
              </React.Fragment>;

  return (
    <React.Fragment>
      <nav className="nav">
        <div className="nav-main">
          <div className="logo">
            <a href="/"><img src={Logo} alt="Edukolab logo" /></a>
          </div>

            { menu }

            <div className="hambuger">
              <span className="bar" onClick={() => setShowMenu(!showMenu)}></span>
              <span className="bar" onClick={() => setShowMenu(!showMenu)}></span>
            </div>
        </div>
      </nav>
      {showMenu && <div className="mobile-menu">
        <ul class="m-menu">
          <li><a href="/">Courses</a></li>
          <li><a href="/">Assessment</a></li>
          <li><a href="/">Further Study</a></li>
          <li><a href="/">About EduKolab</a></li>
        </ul>
        <div class="m-cta">
          <a href="/" className="cta-login">Login</a>
          <a href="/" className="cta-reg">Register</a>
        </div>
      </div>}
    </React.Fragment>
  );
}

export default Header;
