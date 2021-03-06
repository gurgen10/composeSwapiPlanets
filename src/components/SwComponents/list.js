import React from 'react';
import ListItem from '../ItemList';
import { withData } from '../hocHelpers';
import SwapiService from '../../services/SwapiService';

const {
  getUsers,
  getPlanets,
  getStarShips
} = new SwapiService();

const renderWithData = (RenderItem, func) => {
  return (props) => <RenderItem {...props} >{ func }</RenderItem>;
}

const renderName = (item) => `${item.name}`;
const renderNameAndDiameter = (item) => `${item.name} (${item.diameter})`;

const UsersList = withData(
  renderWithData(ListItem, renderName),
  getUsers
);

const PlanetsList = withData(
  renderWithData(ListItem, renderNameAndDiameter),
  getPlanets
);

const StarshipList = withData(
  renderWithData(ListItem, renderName),
  getStarShips
);

export {
  UsersList,
  PlanetsList,
  StarshipList
}