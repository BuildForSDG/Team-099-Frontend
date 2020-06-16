import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import logoutAction from '../../../redux/actions/auth/logoutAction.js';
import AuthRedirect from '../authRedirect.js';

class Logout extends Component {
  static propTypes = {
    logoutAction: PropTypes.func
  };

  render = () => <AuthRedirect type="logout" />;

  componentDidMount = () => this.props.logoutAction();
}

export default connect(null, { logoutAction })(Logout);
