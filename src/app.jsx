import React, { Component } from 'react';
import PropList from './proplist';
import { Form, FormControl, Button } from 'react-bootstrap';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'sortedData': []
    }
  };

  render() {
    return (
      <div className="app">
        <div className="app-title">
          <h1>Super Hero Listings Widget</h1>
          <Button bsStyle="primary">Price</Button>
          <Button bsStyle="primary">Beds</Button>
          <Button bsStyle="primary">Sq. ft.</Button>
        </div>
        <PropList
          listings={this.props.listings}
        />
      </div>
    );
  }
}

export default App;
