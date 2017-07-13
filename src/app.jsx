import React, { Component } from 'react';
import PropList from './proplist';
import { ButtonToolbar, Button } from 'react-bootstrap';
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
          <h3>Super Hero Listings Widget</h3>
          <div className="button-group">
            <button type="button" className="btn btn-success">Price</button>
            <button type="button" className="btn btn-success">Beds</button>
            <button type="button" className="btn btn-success">Sq. ft.</button>
          </div>
        </div>
        <PropList
          listings={this.props.listings}
        />
      </div>
    );
  }
}

export default App;
