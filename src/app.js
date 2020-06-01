import React, { Fragment } from 'react';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import './app.css';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="App">Learn React</div>
      <Footer />
    </Fragment>
  );
}

export default App;
