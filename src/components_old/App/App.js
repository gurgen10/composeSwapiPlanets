import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PersonPage from '../PersonPage';
import ItemDetail from '../ItemDetail';
import ErrorButton from '../ErrorButton';
import ErrorBoundary from '../ErrorBoundary'
import Record from '../Record';

import SwapiService from '../../services/SwapiService';

class App extends Component {
  swapi = new SwapiService();

  state = {
    toggleRandomPlanet: true,
  }

  onToggleRandomPlanet = () => {
    this.setState(({ toggleRandomPlanet }) => {
      return {
        toggleRandomPlanet: !toggleRandomPlanet
      }
    })
  }

  render() {
    const {
      toggleRandomPlanet
    } = this.state;

    const randomPlanet = toggleRandomPlanet? <RandomPlanet />: null;

    const personDetail = (
      <ItemDetail
        itemId="12"
        getData={ this.swapi.getUser }
        getImage={ this.swapi.getUserImage }
      >
        <Record lable="Gender" objKey="gender" />
        <Record lable="Eye Color" objKey="eyeColor" />
      </ItemDetail>
    )

    const planetDetail = (
      <ItemDetail
        itemId="7"
        getData={ this.swapi.getPlanet }
        getImage={ this.swapi.getPlanetImage }
      >
        <Record lable="Population" objKey="population" />
      </ItemDetail>
    )

    return (
      <ErrorBoundary>
        <Container fluid>
          <Header />
          { randomPlanet }
          <Button className="ml-5" variant="warning" onClick={ this.onToggleRandomPlanet }>Toggle random planet</Button>
          <ErrorButton />
          <PersonPage />

          {/* <RowCol left={ planetDetail } right={ personDetail } /> */}
        </Container>
      </ErrorBoundary>
    );
  }
}

export default App;
