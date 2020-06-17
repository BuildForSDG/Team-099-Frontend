import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import AuthHeader from '../auth/authHeader.js';

import svg from '../../assets/svg/undraw_teaching_f1cm.svg';
import logo from '../../assets/img/logo_white.png';

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object
  };

  renderAuthButton = ({ isSignedIn }) => (isSignedIn ? (
      <Link to="/logout">Logout</Link>
  ) : (
      <>
        <Link to="/register" className="mr-3">
          Register
        </Link>
        <Link to="/login">Login</Link>
      </>
  ));

  render = () => (
    <div className="h-100 bg-light-edukolab">
      <AuthHeader logo={logo} />
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-5 position-fixed h-100 d-none d-lg-flex bg-primary-edukolab"></div>
          <div className="col-10 offset-1">
            <div className="row">
              <div className="d-none d-lg-flex col-8 auth-svg">
                <img src={svg} alt="" className="img-fluid d-none d-md-block" />
              </div>
              <div className="col py-5">
                <p className="lead text-light">We are doing awesome things</p>
                <hgroup>
                  <h2>
                    Teaching
                    <br />
                    Jobs
                  </h2>
                  <h5>
                    <em>
                      ...for trained <strong> teachers</strong>
                    </em>
                  </h5>
                </hgroup>
                <p>
                  As a <strong>teacher</strong>, find the right job
                  that matches your training and years of experience.
                </p>
                <p>
                  As a <strong>parent</strong>,<strong> guardian</strong> or
                  <strong> school representative </strong>, find the
                  right qualified teacher for that child or subject.
                </p>

                {this.props.auth.isSignedIn ? (
                  <div className="mt-4">
                      <Link className="btn btn-warning" to="/logout" role="button">
                        Logout
                      </Link>
                    </div>
                ) : (
                  <div className="button-group my-2">
                    <Link className="btn btn-primary-edukolab rounded-pill mb-2" to="/register" role="button">
                      I am a teacher
                    </Link>
                    <Link className="btn btn-light-edukolab rounded-pill" to="/register" role="button">
                      Employ a teacher
                    </Link>

                    <div className="d-lg-none mt-4">
                      <p className="mb-1">Already have an account?</p>
                      <Link className="btn btn-light-edukolab text-primary" to="/login" role="button">
                        Login
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Home);
