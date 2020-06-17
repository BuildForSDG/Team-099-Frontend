import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';

import {
  faLock,
  faTimes,
  faUsers,
  faMobileAlt,
  faUserLock,
  faChalkboardTeacher,
  faSchool,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import '../../../assets/css/auth/authForm.css';

class RegisterForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    buttonValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
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
  };

  renderInput = (icon, action, input, label, type, placeholder, touched, error) => (
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
      <div className="form-validation-response">{this.renderValidateIcon(touched, error)}</div>
    </div>
  );

  renderSelect = (icon, action, input, label, type) => (
    <>
      <input
        {...input}
        component="input"
        type={type}
        id={`${action}${input.name}${label}`}
        name={`${action}${input.name}`}
        className="custom-control-input"
        value={input.value}
      />
      <label className="custom-control-label py-3" htmlFor={`${action}${input.name}${label}`}>
        <FontAwesomeIcon icon={icon} className="icon" /> {label}
      </label>
    </>
  )

  renderField = ({
    input, label, type, placeholder, icon, action, className, meta: { touched, error, warning }
  }) => (
    <div className={`${className} form-holder`}>
      {className.includes('form-holder-select')
        ? this.renderSelect(icon, action, input, label, type)
        : this.renderInput(icon, action, input, label, type, placeholder, touched, error)}
      {touched
        ? touched && error && <small className="form-info text-danger">{error}</small>
        : warning && <small className="form-info text-info">{warning}</small>}
    </div>
  );

  render() {
    const { handleSubmit, buttonValue } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2 className="mb-0">Get Started</h2>
        <p>
          Fill in your details to get started on EduKolab{' '}
          <span role="img" aria-label="smiley-face-wink">
            &#128521;
          </span>
        </p>
        <div className="form-row">
          <Field
            action="register"
            name="firstName"
            type="text"
            component={this.renderField}
            label="First Name"
            placeholder="e.g: John"
            icon={faUser}
            className="col-12 col-sm-6"
          />
          <Field
            action="register"
            name="familyName"
            type="text"
            component={this.renderField}
            label="Family Name"
            placeholder="e.g: Doe"
            icon={faUsers}
            className="col-12 col-sm-6"
          />
        </div>
        <div className="form-row">
          <Field
            action="register"
            name="email"
            type="email"
            component={this.renderField}
            label="email"
            placeholder="e.g: john.doe@example.com"
            icon={faEnvelope}
            className="col-12 col-sm-6"
          />
          <Field
            action="register"
            name="phone"
            type="tel"
            component={this.renderField}
            label="Phone Number"
            placeholder="e.g: 2348094329871"
            icon={faMobileAlt}
            className="col-12 col-sm-6"
          />
        </div>
        <div className="form-row">
          <Field
            action="register"
            name="password"
            type="password"
            component={this.renderField}
            label="password"
            placeholder="e.g: Type here"
            icon={faLock}
            className="col-12 col-sm-6"
          />
          <Field
            action="register"
            name="confirmPassword"
            type="text"
            component={this.renderField}
            label="Confirm Password"
            placeholder="Confirm here"
            icon={faUserLock}
            className="col-12 col-sm-6"
          />
        </div>
        <small className="section-header">Register as a</small>
        <div className="form-row align-items-center">
          <Field
            action="register"
            name="userType"
            type="radio"
            component={this.renderField}
            label="teacher"
            icon={faChalkboardTeacher}
            className="col form-holder-select"
            value="UT"
          />
          <Field
            action="register"
            name="userType"
            type="radio"
            component={this.renderField}
            label="school representative"
            icon={faSchool}
            className="col form-holder-select"
            value="UESR"
          />
          <Field
            action="register"
            name="userType"
            type="radio"
            component={this.renderField}
            label="parent or guardian"
            icon={faUserTie}
            className="col form-holder-select"
            value="UEG"
          />
        </div>

        <div className="button-group">
          <button className="btn btn-primary btn-primary-edu" type="submit">
            {buttonValue}
          </button>
          <Link className="btn btn-auth btn-auth-side" to="/login" role="button">
            Login
          </Link>
        </div>
      </form>
    );
  }
}

const warn = () => {
  const warnings = {
    password: 'Forgot password?'
  };

  return warnings;
};

const validate = (user) => {
  const errors = {};
  if (!user.firstName) {
    errors.firstName = 'First Name is required';
  }
  if (!user.familyName) {
    errors.familyName = 'Family Name is required';
  }

  if (!user.email) {
    errors.email = 'Required';
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(user.email)) {
    errors.email = 'A valid email address is required';
  }

  if (!user.phone) {
    errors.phone = 'Required';
  } else if (!/^[234]\d{12}$/i.test(user.phone)) {
    errors.phone = 'A valid Nigerian phone number starting with 234 is required';
  }

  if (!user.password) {
    errors.password = 'Required';
  } else if (!/\d/.test(user.password)) {
    errors.password = 'Password must contain a number';
  } else if (!/[A-Z]/.test(user.password)) {
    errors.password = 'Password must contain an upperCase letter';
  } else if (user.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (!user.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (user.confirmPassword !== user.password) {
    errors.confirmPassword = 'Passwords must match';
  }

  if (!user.userType) {
    errors.userType = 'Required';
  }

  return errors;
};

export default reduxForm({ form: 'registerForm', validate, warn })(RegisterForm);
