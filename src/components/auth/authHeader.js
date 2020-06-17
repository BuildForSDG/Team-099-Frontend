import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import blueLogo from '../../assets/img/logo_blue.png';
import whiteLogo from '../../assets/img/logo_white.png';
import '../../assets/css/auth/authHeader.css';

class AuthHeader extends Component {
  static propTypes = {
    isSignedIn: PropTypes.bool,
    logo: PropTypes.string,
    user: PropTypes.object
  };

  authButtonRender = () => {
    const { logo, isSignedIn, user } = this.props;

    if (logo) {
      return isSignedIn ? (
        <Link to="/user" className="text-primary-edukolab">
          <span><FontAwesomeIcon icon={faUser} className="" style={{ width: '20px' }} />{' '}
          </span>{user && user.firstName}
        </Link>
      ) : (
        <div className="button-group d-none d-lg-flex">
          <Link className="btn btn-light-edukolab text-primary" to="/login" role="button">
            Login
          </Link>
        </div>
      );
    }

    return false;
  };

  render = () => (
    <header className="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light py-3">
        <div className="container">
          <Link to="/" alt="logo" className="navbar-brand">
            <img
              src={this.props.logo ? whiteLogo : blueLogo}
              alt="logo"
              width={this.props.logo ? 45 : 30}
              className="mr-0 d-none d-lg-inline mr-1"
            />
            <img src={whiteLogo} alt="logo" width="75" className="mr-0 d-none d-sm-block d-lg-none" />
            <img src={whiteLogo} alt="logo" width="50" className="mr-0 d-sm-none" />
            <span
              className={`lead font-weight-bold ${
                this.props.logo ? 'text-white' : 'text-lg-primary'
              } d-none d-lg-inline`}
            >
              edukolab
            </span>
          </Link>
          {this.authButtonRender()}
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = ({ auth, user }) => ({ isSignedIn: auth.isSignedIn, user: user.selected });

export default connect(mapStateToProps)(AuthHeader);
