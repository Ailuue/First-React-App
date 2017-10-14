import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js'
import { Yelp } from './util/Yelp.js';


/*
Main component in order to bring the app together.
Retrieves AJAX data from Yelp.js, and stores as state.
*/

export default class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		businesses: []
  	};
  	this.searchYelp = this.searchYelp.bind(this);
  }
  // Uses on the Yelp.js AJAX call to set businesses as state
  searchYelp (term, location, sortBy) {
  	console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  	Yelp.search(term, location, sortBy)
  		.then(businesses => {
  			this.setState({
  				businesses: businesses
  			});
  		})
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

