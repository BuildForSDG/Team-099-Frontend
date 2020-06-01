import React, { Fragment } from 'react';
import Header from './Component/header.js';
import Footer from './Component/footer.js';
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
