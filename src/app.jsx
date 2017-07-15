import React, { Component } from 'react';
import _ from 'lodash';
import PropList from './proplist';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'filtered': []
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(value) {
    const data = this.props.listings;
    function sortData(value, data) {
      return data.sort(function(a, b) {
        let x = a[value];
        let y = b[value];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
    this.setState({
      filtered: data
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          <h3>Super Hero Listings Widget</h3>
          <div className="button-group">
            <button
              type="button"
              className="btn btn-success">
              Price
              </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.handleClick('beds')}>
              Beds
              </button>
            <button type="button" className="btn btn-success">Sq. ft.</button>
          </div>
        </div>
        <PropList
          listings={this.state.filtered.length === 0 ? this.props.listings : this.state.filtered}
        />
      </div>
    );
  }
}

export default App;
