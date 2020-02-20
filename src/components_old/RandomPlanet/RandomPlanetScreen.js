import React from 'react';
import { Col } from 'react-bootstrap';

const RandomPlanetScreen = ({ planet }) => {
  const {
    id,
    name,
    population,
    rotationPeriud,
    diameter
  } = planet;

  return (
    <>
      <Col md="3">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="w-100" />
      </Col>
    
      <Col md="9">
        <h2>{name}</h2>
        <ul>
          <li>Population: {population}</li>
          <li>Rotation Pereiud: {rotationPeriud}</li>
          <li>Diameter: {diameter}</li>
        </ul>
      </Col>
    </>
  )
};

export default RandomPlanetScreen;