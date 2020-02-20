import React from 'react';
import Record from '../Record';
import ItemDetail from '../ItemDetail';

import SwapiService from '../../services/SwapiService';

const {
  getStarShip,
  getStarshipImage
} = new SwapiService();

const StarshipDetail = ({ itemId }) => {
  return (
    <ItemDetail
      itemId={ itemId }
      getData={ getStarShip }
      getImage={ getStarshipImage }
    >
      <Record lable="Name" objKey="name" />
      <Record lable="Model" objKey="model" />
    </ItemDetail>
  )
};

export default StarshipDetail;