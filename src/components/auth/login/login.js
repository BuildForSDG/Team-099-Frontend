import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../../../assets/css/auth/auth.css';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import loginSVG from '../../../assets/svg/undraw_secure_login_pdn4.svg';

import AuthHeader from '../authHeader.js';
import LoginForm from './loginForm.js';
import AuthRedirect from '../authRedirect.js';
import { login } from '../../../redux/actions/auth.js';

import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  INIT = { buttonValue: 'Login' };

  constructor(props) {
    super(props);
    this.state = this.INIT;
  }

  static propTypes = {
    login: PropTypes.func
  };

  submit = (authUser) => {
    this.setState({
      buttonValue: (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    });

    this.props
      .login(authUser)
      .then((res) => toast.success(res && res.data && res.data.message))
      .catch((err) => {
        this.setState(this.INIT);

        toast.error(
          (err
            && err.response
            && err.response.data
            && err.response.data.message
            && err.response.data.message.name
          )
            || (err && err.response && err.response.statusText)
            || 'Network error'
        );
      });
  };

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
            <LoginForm onSubmit={this.submit} buttonValue={this.state.buttonValue} />
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

export default connect(null, { login })(Login);
