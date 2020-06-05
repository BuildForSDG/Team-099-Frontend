import React, { Component } from 'react';
import './BuildForSdg/style.css';

class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { fields: {}, errors: {}, style: 'none' };
  }

  handleChange(e) {
    const { fields } = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const fields = {};
      fields.fullName = '';
      fields.email = '';
      fields.phoneNo = '';
      fields.contact = '';
      fields.password = '';
      fields.confirmPassword = '';
      fields.gender = '';
      fields.maritalStatus = '';
      fields.dob = '';
      fields.termsConditions = '';
      fields.decision = '';
      fields.name = '';
      fields.website = '';
      fields.social = '';
      fields.phone = '';
      fields.schEmail = '';

      this.setState({
        fields
      });
      // Handle Submission Here
    }
  }

  validateForm() {
    const {fields} = this.state;
    const errors = {};
    let formisValid = true;

    if (!fields.fullName) {
      formisValid = false;
      errors.fullName = '*Please Enter Your Full Name';
    }
    if (typeof fields.fullName !== 'undefined') {
      if (!fields.fullName.match(/^[a-z A-Z]*$/)) {
        formisValid = false;
        errors.fullName = 'Enter Alphabetic Characters Only';
      }
    }

    if (!fields.phoneNo) {
      formisValid = false;
      errors.phoneNo = '*Please Enter Your Phone Number';
    }
    if (typeof fields.phoneNo !== 'undefined') {
      if (!fields.phoneNo.match(/^[0-9]{11}$/)) {
        formisValid = false;
        errors.phoneNo = 'Enter a valid Phone Number';
      }
    }

    if (!fields.password) {
      formisValid = false;
      errors.password = '*Please Enter Your Password';
    }
    if (typeof fields.password !== 'undefined') {
      if (!fields.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
        formisValid = false;
        errors.password = 'Your Password must be 8 character above';
      }
    }

    if (!fields.confirmPassword) {
      formisValid = false;
      errors.confirmPassword = '*Please Cofirm Your Password';
    }
    if (fields.confirmPassword !== fields.password) {
      formisValid = false;
      errors.confirmPassword = 'Your Password must match';
    }

    this.setState({
      errors
    });

    return formisValid;
  }

  render() {
    return (
      <div className="main-container">
        <div className="register shadow">
          <h1>User Registration Page</h1>
          <center>
            <span>All Fields With * Are Neccessary</span>
          </center>
          <form method="post" name="userRegistratioForm" onSubmit={this.handleSubmit}>
            <label>
              Full Name<span>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Your Full Name"
              value={this.state.fields.fullName}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.fullName}</div>

            <label>
              Email<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={this.state.fields.email}
              onChange={this.handleChange}
              required
            />

            <label>
              Phone Number<span>*</span>
            </label>
            <input
              type="text"
              name="phoneNo"
              placeholder="e.g 08034567812"
              value={this.state.fields.phoneNo}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.phoneNo}</div>

            <label>
              Contact Address<span>*</span>
            </label>
            <input
              type="text"
              name="contact"
              placeholder="e.g 10 Mobolaji Johnson Street Anthony Village, Lagos state, Nigeria."
              value={this.state.fields.contact}
              onChange={this.handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Secret Password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <small>Your password must be atleast 8 characters longer and include lowercase, uppercase and number</small>
            <div className="errorMsg">{this.state.errors.password}</div>

            <label>
              Confirm Password<span>*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Your Password Again"
              value={this.state.fields.confirmPassword}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.confirmPassword}</div>

            <label>
              Gender<span>*</span>
            </label>
            <select name="gender" onChange={this.handleChange} required>
              <option value="">--Choose--</option>
              <option name="Male" value="Male">
                Male
              </option>
              <option name="Female" value="Female">
                Female
              </option>
              <option name="Bi-sexual" value="Bi-sexual">
                Bi-sexual
              </option>
            </select>

            <label>
              Marital Status<span>*</span>
            </label>
            <select name="maritalStatus" onChange={this.handleChange} required>
              <option value="">--Choose--</option>
              <option name="Single" value="Single">
                Single
              </option>
              <option name="Married" value="Married">
                Married
              </option>
              <option name="Divorced" value="Divorced">
                Divorced
              </option>
              <option name="Widow" value="Widow">
                Widow
              </option>
            </select>

            <label>
              Date of Birth<span>*</span>
            </label>
            <input type="date" name="dob" value={this.state.fields.dob} onChange={this.handleChange} required />

            <label>
              Are You A School Owner ?<span>*</span>
            </label>
            <select name="decision" onChange={this.handleChange} required>
              <option value="">--Choose--</option>
              <option name="NO" value="NO">
                NO
              </option>
              <option name="NOT SURE" value="NOT SURE">
                NOT SURE
              </option>
              <option name="YES" value="YES">
                YES
              </option>
            </select>

            <div style={{ display: this.state.fields.decision === 'YES' ? 'block' : 'none' }}>
              <label>School Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your School Name"
                value={this.state.fields.name}
                onChange={this.handleChange}
              />

              <label>School Website</label>
              <input
                type="text"
                name="website"
                placeholder="Enter the school's official Website Address"
                value={this.state.fields.website}
                onChange={this.handleChange}
              />

              <label>Social Media</label>
              <input
                type="text"
                name="social"
                placeholder="Enter the school's social medial handles"
                value={this.state.fields.social}
                onChange={this.handleChange}
              />

              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Your School Phone Number"
                value={this.state.fields.phone}
                onChange={this.handleChange}
              />

              <label>Email</label>
              <input
                type="text"
                name="schEmail"
                placeholder="Enter Your School Official Email Address"
                value={this.state.fields.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="termsContainer">
              <input
                className="termsInput"
                id="terms"
                name="termsConditions"
                type="checkbox"
                value={this.state.fields.termsConditions}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="terms" className="terms">
                {' '}
                I agree to the <a href="terms.html">terms and conditions</a>
              </label>
            </div>

            <input type="submit" className="button" value="Submit" />
            <p>
              Already have an account? <a href="./login.html">Log in</a>
            </p>
            <p>
              Return to <a href="./home.html">Homepage</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
