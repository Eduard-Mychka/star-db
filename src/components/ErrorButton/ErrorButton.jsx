import React, { Component } from 'react';

import './ErrorButton.scss';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="toggle-planet btn btn-danger btn-md"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </button>
    );
  }
}
