import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ErrorIndicator from '../ErrorIndicator';
import Loading from '../Loading';
import RandomPlanetScreen  from './RandomPlanetScreen';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

class RandomPlanet extends Component {

  swapi = new SwapiService();

  state = {
    planet: {
      id: null,
      name: null,
      population: null,
      rotationPeriud: null,
      diameter: null,
    },
    error: {
      isError: false,
      message: null,
    },
    loading: true
  };

  componentDidMount() {
    this.getPlanetData();
    this.interval = setInterval(this.getPlanetData, 9000);
  }

  setPlanetData = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  setError = ({ message }) => {
    this.setState({
      error: {
        isError: true,
        message
      },
      loading: false
    });
  }

  getPlanetData = async () => {
    try {
      const id = Math.floor(Math.random() * 25 + 2);
      const data = await this.swapi.getPlanet(id);
      
      this.setPlanetData(data);
    } catch (e) {
      this.setError(e);
    }
  }

  render () {
    const {
      planet,
      loading,
      error
    } = this.state;

    const errorContent = error.isError ? <ErrorIndicator errMesage={error.message} />: null;
    const content = !loading && !error.isError? <RandomPlanetScreen planet={planet} />: null;
    const spinner = loading? <Loading />: null;

    return (
      <Row className="random-planet">
        { errorContent }
        { spinner }
        { content }
      </Row>
    );
  }
};

export default RandomPlanet;
