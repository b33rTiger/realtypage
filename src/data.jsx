import React, { Component } from 'react';
import batmanData from './batmanRealty.js';
import supermanData from './supermanRealty.js'
import App from './app';
import './app.css';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'listings': []
    }
  };

  componentDidMount() {
    const rawBatman = batmanData;
    const rawSuperman = supermanData;
    let listings = [];
    let listing = {};
    let listingSet = new Set();
    if(rawBatman.items === undefined) {
      for(const [value, key] of Object.entries(rawBatman)) {
        if(!listingSet.has(value)) {
          listing['address'] = value;
          listingSet.add(value);
        }
        for(const [val, ky] of Object.entries(key)) {
          if(!listingSet.has(val)) {
            listing[val] = ky;
          }
        }
        listings.push(Object.assign({}, listing));
      }
    }
        if(rawSuperman.items !== undefined) {
          rawSuperman.items.forEach((item) => {
            if (!listingSet.has(item.address)) {
              listingSet.add(item.address);
              listings.push(item);
            }
          })
        }
        this.buildListings(listings);
  }

  buildListings(data) {
    let array = {};
      data.forEach((item) => {
        const addy = item.address.split(',');
        item['street'] = addy[0].trim();
        item['city'] = addy[1].trim();
        item['state'] = addy[2].trim();
      });
      const pairs = [['street'], ['city'], ['state'], ['baths'], ['beds'], ['built'], ['price', 'cost'], ['sqft', 'sq_ft'], ['img', 'thumb'], ['url']];
      let finalListings = data.map((item) => {
        let dataSet = new Set();
        for (let synonym of pairs) {
          const pair = synonym[0];
          array[pair] = '';
          for (let word of synonym) {
            let fKey = Object.keys(item);
            for(let i = 0; i < fKey.length; i++) {
              if(fKey[i] === word && !dataSet.has(fKey[i])) {
                array[pair] = Object.values(item)[i];
                dataSet.add(fKey[i]);
              }
            }
          }
        }
        return Object.assign({}, array);
      });
        this.setState({
          listings: finalListings
        })
  }
  render() {
    return(
      <div>
        <App listings={this.state.listings} />
      </div>
    )
  }
}

export default Data;
