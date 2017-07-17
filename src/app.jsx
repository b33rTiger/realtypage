import React, { Component } from 'react';
import _ from 'lodash';
import PropList from './proplist';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'filtered': [],
      'classes': {
        'bedsState': false,
        'priceState': false,
        'sqftState': false
      }
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(value) {
    console.log(value);
    const data = this.props.listings;
    if (value === 'beds') {
      console.log('value beds: ' + value);
      this.sortData(data, value)
      this.setState({
        filtered: data,
        priceState: false,
        sqftState: false,
        bedsState: true
      })
    } else if (value === 'price') {
      this.sortData(data, value)
      this.setState({
        filtered: data,
        priceState: true,
        sqftState: false,
        bedsState: false
      })
    } else {
      this.sortData(data, value)
      this.setState({
        filtered: data,
        priceState: false,
        sqftState: true,
        bedsState: false
      })
    }
  }

  sortData(data, key) {
    return data.sort(function(a, b) {
      let x = a[key];
      let y = b[key];
      return ((x < y) ? - 1 : ((x > y) ? 1 : 0));
    });
  }

  render() {
    const {bedsState, priceState, sqftState} = this.state.classes;
    return (
      <div className="app">
        <div className="app-title">
          <h3>Super Hero Listings Widget</h3>
          <div className="button-group">
            <button
              type="button"
              onClick={() => this.handleClick('price')}
              className={'btn btn-success ' + (priceState ? 'true' : 'false')}>
              Price
              </button>
            <button
              type="button"
              onClick={() => this.handleClick('beds')}
              className={'btn btn-success ' + (bedsState ? 'true' : 'false')}>
              Beds
              </button>
            <button type="button"
              onClick={() => this.handleClick('sqft')}
              className={'btn btn-success ' + (sqftState ? 'true' : 'false')}>
              Sq. ft.
              </button>
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
