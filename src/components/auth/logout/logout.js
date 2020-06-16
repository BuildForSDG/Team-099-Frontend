import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/auth.js';
import AuthRedirect from '../authRedirect.js';

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func
  };

  render = () => <AuthRedirect type="logout" />;

  componentDidMount = () => this.props.logout();
}

export default connect(null, { logout })(Logout);
