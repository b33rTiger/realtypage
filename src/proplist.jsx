import React from 'react';
import NumberFormat from 'react-number-format';
import './app.css';

const PropList = (props) => {
  const listings = props.listings.map((item, index) =>
      <div className="row col-md-6 col-sm-12" key={index}>
        <div className="content">
          <div className="image">
          <img src={item.img} alt=""/>
          </div>
          <div className="listInfo">
            <div className="street">{item.street}</div>
            <div className="state">{item.city}, {item.state}</div>
            <div className="price">
              <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            <div className="features">
              <li>{item.beds} beds</li>
              <li>{item.baths} baths</li>
              {item.sqft > 0 && <li>{item.sqft} sq ft</li>}
            </div>
          </div>
          <div className="year">
            {item.built > 0 && <div>Built in {item.built}</div>}
          </div>
        </div>
      </div>
  );
  return (
    <div className="container">
      {listings}
    </div>
  );
}
export default PropList;
