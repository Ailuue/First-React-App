import React from 'react';
import ReactDOM from 'react-dom';
import Business from '../Business/Business.js'
import './BusinessList.css';

export default class BusinessList extends React.Component {
  render() {
    return (
    		<div className="BusinessList">
    		{
 				this.props.businesses.map(function (business) {
 					return <Business business={business} />;
 				})
    		}
			</div>
    	);
  }
}

//ReactDOM.render(<BusinessList />, document.getElementById('app'));