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
    if (this.props.businesses.length !== 0) {
    	console.log(this.props.businesses);
    return (
    		<div className="BusinessList">
    		{
    			
 				this.props.businesses ? this.props.businesses.map(function (business) {
 					return <Business key={business.id} business={business} />;
 				}) : console.log("failed")
 			}
    		
			</div>
    	);
}
	else {
		//return <div className="BusinessList"><p>No Results</p></div>
		return <div>No Results</div>;
		console.log('hi')
	}
  }
}

//ReactDOM.render(<BusinessList />, document.getElementById('app'));