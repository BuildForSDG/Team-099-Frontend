import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './app.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/home.js';
import Login from './components/auth/login/login.js';
import Logout from './components/auth/logout/logout.js';
import Register from './components/auth/register/register.js';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
