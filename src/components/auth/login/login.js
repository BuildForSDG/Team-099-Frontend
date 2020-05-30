import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../../../assets/css/auth/auth.css';
import { connect } from 'react-redux';
import loginSVG from '../../../assets/svg/undraw_secure_login_pdn4.svg';

import AuthHeader from '../authHeader.js';
import AuthForm from '../authForm.js';
import AuthRedirect from '../authRedirect.js';
import loginAction from '../../../redux/actions/auth/loginAction.js';

class Login extends Component {
  static propTypes = {
    loginAction: PropTypes.func
  }

  submit = (authUser) => this.props.loginAction(authUser);

  render = () => (
    <>
      <AuthRedirect />
      <AuthHeader />
      <div id="authContainer" className="container-fluid h-100">
        <div className="row h-100 align-items-center py-0">
          <div className="d-none d-lg-flex col auth-svg auth-holder">
            <img src={loginSVG} alt="" className="img-fluid d-none d-md-block" />
          </div>

          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 form-container-holder auth-holder">
            <AuthForm onSubmit={this.submit} />
            <div className="social-auth">
              <p className="section-header">or login with</p>
              <div className="social-auth-facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default connect(null, { loginAction })(Login);
