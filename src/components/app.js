import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/Weatherlist';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

