import React, { Component } from 'react';
import './app.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          <h1>Super Hero Listings Widget</h1>
          <Button bsStyle="primary">Price</Button>
          <Button bsStyle="primary">Beds</Button>
          <Button bsStyle="primary">Sq. ft.</Button>
        </div>
      </div>
    )
  }
}

export default App;
