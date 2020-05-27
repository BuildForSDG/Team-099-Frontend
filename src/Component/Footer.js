import React from 'react';
import LogoFooter from '../assets/logowhite.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="ft">
        <div className="ft-col">
          <img src={LogoFooter} alt="EduKolab white logo" />
        </div>

        <div className="ft-col">
          <ul>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Assessment</a></li>
            <li><a href="/">Further Study</a></li>
          </ul>
        </div>

        <div className="ft-col">
          <ul>
            <li><a href="/">About EduKolab</a></li>
            <li><a href="/">The Team</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p className="copy">&copy; 2020 copyright EduKolab.</p>
      </div>
    </footer>
  );
}

export default Footer;
