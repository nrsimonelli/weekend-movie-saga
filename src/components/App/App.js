import React, { Component } from 'react';
import './App.css';

// hash router import
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Movies from '../Movies/Movies';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' path='/Home' component={Home} />
          <Route path='/Movies' component={Movies} />
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
