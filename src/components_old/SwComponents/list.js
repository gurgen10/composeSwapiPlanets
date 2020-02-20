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

const renderUserName = (item) => `${item.name} (${item.gender})`;
const renderPlanetName = (item) => `${item.name} (${item.diameter})`;
const renderStarshipName = (item) => `${item.name} (${item.model})`;

const UsersList = withData(
  renderWithData(ListItem, renderUserName),
  getUsers
);

const PlanetsList = withData(
  renderWithData(ListItem, renderPlanetName),
  getPlanets
);

const StarshipList = withData(
  renderWithData(ListItem, renderStarshipName),
  getStarShips
);

export {
  UsersList,
  PlanetsList,
  StarshipList
}