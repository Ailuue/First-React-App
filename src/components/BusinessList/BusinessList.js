import React from 'react';
import ReactDOM from 'react-dom';
import Business from '../Business/Business.js'
import './BusinessList.css';

/*
Component for creating each business image and information.
Uses a mapping loop to procedurally generate the data from the AJAX call in Yelp.js -> App.js,
passing it to Business.js
*/

export default class BusinessList extends React.Component {
  render() {
    return (
    		<div className="BusinessList">
    		{
    			
 				this.props.businesses ? this.props.businesses.map(function (business) {
 					return <Business key={business.id} business={business} />;
 				}) : console.log("failed")
 			}
    		}
			</div>
    	);
  }
}

//ReactDOM.render(<BusinessList />, document.getElementById('app'));