import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/home.js';


function App() {
  return <Router>
    <Route path='/' component={Home} />
  </Router>;
}

export default App;
