import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PersonPage from '../PersonPage';
import ItemDetail from '../ItemDetail';
import ErrorButton from '../ErrorButton';
import ErrorBoundary from '../ErrorBoundary'
import { SWProvider} from '../SWContext';
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

    return (
      <ErrorBoundary>
        <Container fluid>
          <SWProvider value={this.swapi}>
            <Header />
            { randomPlanet }
            <Button className="ml-5" variant="warning" onClick={ this.onToggleRandomPlanet }>Toggle random planet</Button>
            <ErrorButton />
            <PersonPage />
            </SWProvider>
        </Container>
      </ErrorBoundary>
    );
  }
}

export default App;
