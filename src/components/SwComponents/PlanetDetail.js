import React from 'react';
import Record from '../Record';
import ItemDetail from '../ItemDetail';
import withSwapiData from '../hocHelpers/withSwapiData';

const PlanetDetail = (props) => {
  return (
    <ItemDetail {...props}>
      <Record lable="Name" objKey="name" />
      <Record lable="Diameter" objKey="diameter" />
    </ItemDetail>
  )
};

const mapMetothToProps = (swapi) => {
  return {
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage
  }
}

export default withSwapiData(PlanetDetail, mapMetothToProps);