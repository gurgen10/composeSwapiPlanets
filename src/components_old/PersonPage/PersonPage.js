import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ErrorBoundary from '../ErrorBoundary';
import {
  UsersList,
  PlanetsList,
  StarshipList,
  UserDetail,
  PlanetDetail,
  StarshipDetail
} from '../SwComponents';

class PersonPage extends Component {
  state = {
    itemId: null
  }

  getItemId = (id) => {
    this.setState({ itemId: id })
  }

  render() {
    const { itemId } = this.state;

    return (
      <ErrorBoundary>
        <Row className="main-container">
          <Col md="3">
            <UsersList getItemId={ this.getItemId } />

            <hr />

            <PlanetsList getItemId={ this.getItemId } />
          </Col>

          <Col md="9">
            <UserDetail itemId={ itemId } />
            <PlanetDetail itemId={ itemId } />               
          </Col>
        </Row>
      </ErrorBoundary>
    )
  }
}

export default PersonPage