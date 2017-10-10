import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
  'Distance': 'distance'
}

/*
Component for the search bar.
Uses states in order to define search-by bar and functioning,
*/

export default class SearchBar extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { 
  		term: '',
  		location: '',
  		distance: '',
  		sortBy: 'best_match'
  	};

  	this.getSortByClass = this.getSortByClass.bind(this);
  	this.handleTermChange = this.handleTermChange.bind(this);
  	this.handleLocationChange = this.handleLocationChange.bind(this);
  	this.handleSearch = this.handleSearch.bind(this);

  }
// Highlights clicked on sorting option using CSS class
  getSortByClass (sortByOption) {
	if (this.state.sortBy === sortByOption) {
		return 'active';
	} else {
		return '';
	}
}

//Various handlers for event changes
handleSortByChange (sortByOption) {
	this.setState({sortBy: sortByOption});
}

handleTermChange (e) {
	this.setState({term: e.target.value});
}

handleLocationChange(e) {
	this.setState({location: e.target.value});
}

handleSearch (e) {
	this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
	e.preventDefault();
}
  
//Helper function for rendering the sort-by options
  renderSortByOptions() {
  return Object.keys(sortByOptions).map(sortByOption => {
  	let sortByOptionValue = sortByOptions[sortByOption];
  	return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} 
  	onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>;
  });
}

  render() {
    return (
		<div className="SearchBar">
		  <div className="SearchBar-sort-options">
		    <ul>
		      {this.renderSortByOptions()}
		    </ul>
		  </div>
		  <div className="SearchBar-fields">
		    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
		    <input placeholder="Where?" onChange={this.handleLocationChange}/>
		  </div>
		  <div className="SearchBar-submit">
		    <a onClick={this.handleSearch}>Let's Go</a>
		  </div>
		</div>
    	);
  }
}

//ReactDOM.render(<SearchBar />, document.getElementById('app'));