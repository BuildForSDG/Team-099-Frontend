import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    auth: PropTypes.object
  };

  renderAuthButton = ({ isSignedIn }) => (isSignedIn ? (
      <Link to="/logout">Logout</Link>
  ) : (
      <>
        <Link to="/register" className="mr-3">Register</Link>
        <Link to="/login">Login</Link>
      </>
  ));

  render = () => (
    <>
      <div>Welcome Home</div>
      {this.renderAuthButton(this.props.auth)}
    </>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Home);
