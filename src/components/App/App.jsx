import React, { Component } from 'react';

import PeoplePage from '../PeoplePage';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorButton from '../ErrorButton';

import './App.scss';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet 
    ? <RandomPlanet/> 
    : null;

    return (
      <div className="stardb-app">
        <Header />
        { planet }
        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-danger btn-md"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}