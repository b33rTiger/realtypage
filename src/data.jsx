import React, { Component } from 'react';
import './app.css';
import batmanData from './batmanRealty.js';
import supermanData from './supermanRealty.js'

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };

}

export default Data;
