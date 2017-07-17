import React, { Component } from 'react';
import PropList from './proplist';
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
    const data = this.props.listings;
    if (value === 'beds') {
      this.sortData(data, value)
      this.setState({
        filtered: data,
        'classes': {
          'bedsState': true,
          'priceState': false,
          'sqftState': false
        }
      })
    } else if (value === 'price') {
      this.sortData(data, value)
      this.setState({
        filtered: data,
        'classes': {
          'bedsState': false,
          'priceState': true,
          'sqftState': false
        }
      })
    } else {
      this.sortData(data, value)
      this.setState({
        filtered: data,
        'classes': {
          'bedsState': false,
          'priceState': false,
          'sqftState': true
        }
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
              className={'btn btn-success ' + (priceState ? 'active' : '')}>
              Price
              </button>
            <button
              type="button"
              onClick={() => this.handleClick('beds')}
              className={'btn btn-success ' + (bedsState ? 'active' : '')}>
              Beds
              </button>
            <button type="button"
              onClick={() => this.handleClick('sqft')}
              className={'btn btn-success ' + (sqftState ? 'active' : '')}>
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
