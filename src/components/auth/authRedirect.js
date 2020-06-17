import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AuthRedirect extends Component {
  static propTypes = { auth: PropTypes.object, type: PropTypes.string };

  render = () => {
    const { auth, type } = this.props;

    if (type === 'logout') {
      return auth.isSignedIn ? '' : <Redirect to="/" />;
    }
    return auth.isSignedIn ? <Redirect to="/user" /> : '';
  };
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(AuthRedirect);
