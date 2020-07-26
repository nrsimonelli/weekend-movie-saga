import React, { Component } from 'react';
import './App.css';

// hash router import
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Details from '../Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className='theme'>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/details/:id' component={Details} />
        </Router>
        
      </div>
    );
  }
}

export default App;
