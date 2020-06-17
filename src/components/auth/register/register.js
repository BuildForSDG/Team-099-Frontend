import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../../../assets/css/auth/auth.css';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import svg from '../../../assets/svg/undraw_enter_uhqk.svg';

import AuthHeader from '../authHeader.js';
import AuthRedirect from '../authRedirect.js';
import { userPost } from '../../../redux/actions/user.js';

import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './registerForm.js';
import { login } from '../../../redux/actions/auth.js';

class Register extends Component {
  INIT = { buttonValue: 'Crate Account' }

  constructor(props) {
    super(props);
    this.state = this.INIT;
  }

  static propTypes = {
    login: PropTypes.func,
    userPost: PropTypes.func
  };

  submit = (userData) => {
    this.setState({
      buttonValue: (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    });

    const { email, password } = userData;

    this.props
      .userPost(userData).then(() => this.props.login({ email, password }))
      .catch((err) => {
        this.setState(this.INIT);
        toast.error(
          (err && err.response && err.response.data && err.response.data.message)
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
          <div className="d-none d-lg-flex col auth-svg">
            <img src={svg} alt="" className="img-fluid d-none d-md-block" />
          </div>

          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0 form-container-holder">
            <RegisterForm onSubmit={this.submit} buttonValue={this.state.buttonValue} />
            <div className="social-auth">
              <p className="section-header">or join with</p>
              <div className="social-auth-facebook">
                <FontAwesomeIcon icon={faFacebookF} className="text-white" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default connect(null, { login, userPost })(Register);
