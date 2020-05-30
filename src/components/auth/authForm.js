import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import '../../assets/css/auth/authForm.css';

class AuthForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  renderValidateIcon = (touched, error) => {
    let className = null;
    let icon = null;
    if (touched) {
      className = error === undefined ? 'text-success' : 'text-danger';
      icon = error === undefined ? faCheckCircle : faTimes;

      return <FontAwesomeIcon className={className} icon={icon} />;
    }
    return false;
  }

  renderField = ({
    input, label, type, placeholder, icon, action, meta: { touched, error, warning }
  }) => (

    <div className="col-12 form-holder">
      <div className="d-flex align-items-center">
        <div className="form-icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex-grow-1">
          <label htmlFor={`${action}${input.name}`}>{label}</label>
          <input
            {...input}
            component="input"
            type={type}
            className="form-control"
            id={`${action}${input.name}`}
            placeholder={placeholder}
            autoComplete="off"
          />
        </div>
        <div className="form-validation-response">
         {this.renderValidateIcon(touched, error)}
        </div>
      </div>
      { touched ? (
        touched
        && (error && <small className="form-info text-danger">{error}</small>))
        : warning && <small className="form-info text-info">{warning}</small>}
    </div>
  );

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2 className="mb-0">Welcome Back</h2>
        <p>
          Login to EduKolab{' '}
          <span role="img" aria-label="smiley-face-wink">
            &#128521;
          </span>
        </p>
        <div className="form-row">
          <Field action='login' name="contact" type="text" component={this.renderField} label="contact" placeholder="e.g: 08103459871" icon={faAddressCard} />
        </div>
        <div className="form-row">
        <Field action='login' name="password" type="password" component={this.renderField} label="password" placeholder="Type Here" icon={faLock} />
        </div>

        <div className="button-group">
          <button className="btn btn-auth btn-auth-main" type="submit">
            Login
          </button>
          <Link className="btn btn-auth btn-auth-side" to="/register" role="button">
            Create Account
          </Link>
        </div>
      </form>
    );
  }
}

const warn = () => {
  const warnings = {
    contact: 'Phone number or email address',
    password: 'Forgot password?'
  };

  return warnings;
};

const validate = (authUser) => {
  const errors = {};
  if (!authUser.fName) {
    errors.fName = 'First Name is required';
  }
  if (!authUser.lName) {
    errors.lName = 'Family Name is required';
  }

  if (!authUser.contact) {
    errors.contact = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(authUser.contact)) {
    errors.contact = authUser.contact.length === 11 && authUser.contact.split('')[0] === '0'
      ? undefined
      : 'A valid email address or phone number is required';
  }

  if (!authUser.password) {
    errors.password = 'Required';
  } else if (!/\d/.test(authUser.password)) {
    errors.password = 'Password must contain a number';
  } else if (!/[A-Z]/.test(authUser.password)) {
    errors.password = 'Password must contain an upperCase letter';
  } else if (authUser.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (!authUser.cpassword) {
    errors.cpassword = 'Required';
  } else if (authUser.cpassword !== authUser.password) {
    errors.cpassword = 'Passwords must match';
  }

  if (!authUser.role) {
    errors.age = 'Required';
  }

  return errors;
};

export default reduxForm({ form: 'authForm', validate, warn })(AuthForm);
