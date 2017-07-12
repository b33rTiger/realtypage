import React from 'react';
import './app.css';

const PropList = (props) => {
  const listings = props.listings.map((item, index) =>
    <div className="content col-md-6" key={index}>
      <div className="image">
        <img src={item.img} alt=""/>
      </div>
      <div className="listInfo">
        <div className="street">{item.street}</div>
        <div className="state">{item.state}</div>
        <div className="price">{item.price}</div>
      </div>
      <ul className="features">
        <li>{item.beds} bdrms</li>
        <li>{item.baths} bath</li>
        <li>{item.sqft} sq ft</li>
      </ul>
      <div className="year">{item.built}</div>
    </div>
  );
  return (
    <div className="container">
      {listings}
    </div>
  );
}
export default PropList;
