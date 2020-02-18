import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ErrorButton extends Component {

  state = {
    showError: false
  }

  render() {

    if (this.state.showError) {
      this.foo.bar = 'helloo'
    }

    return (
      <Button
        onClick={ ()=> this.setState({ showError: true }) }
        variant="danger"
        className="ml-2"
      >
        Throw Error
      </Button>
    )
  }
}

export default ErrorButton;