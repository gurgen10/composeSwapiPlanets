import React from 'react';
import { withItemDetail } from '../hocHelpers';
import SwapiService from '../../services/SwapiService';
import ItemDetail from '../ItemDetail';
import Record from '../Record';

const {
  getUser,
  getPlanet,
  getStarShip, 
  getUserImage, 
  getPlanetImage,
  getStarshipImage
} = new SwapiService();

const renderWithData = (RenderItem, func) => {
  return (props) => <RenderItem {...props} >{ func }</RenderItem>;
}

const renderUserDetail = () => {
    return [
        (<Record lable="Gender" objKey="gender" />),
        (<Record lable="Eye Color" objKey="eyeColor" />)
    ];
};
const renderPlanetDetail = () => {
    return [
        <Record lable="Name" objKey="name" />,
        <Record lable="Population" objKey="population" />,
        <Record lable="RotationPereiud" objKey="rotationPereiud" />,
        <Record lable="Diameter" objKey="diameter" />
    ];
};
const renderStarshipDetail = () => {
    return [
        <Record lable="name" objKey="name" />,
        <Record lable="Model" objKey="model" />,
        <Record lable="Manufacturer" objKey="manufacturer" />,
        <Record lable="CostInCredits" objKey="costInCredits" />,
        <Record lable="Length" objKey="length" />,
        <Record lable="Crew" objKey="crew" />,
        <Record lable="Passengers" objKey="passengers" />,
        <Record lable="CargoCapacity" objKey="cargoCapacity" />   
    ];
};

const UserDetail = withItemDetail(
  renderWithData(ItemDetail, renderUserDetail),
  getUser, getUserImage
);

const PlanetDetail = withItemDetail(
  renderWithData(ItemDetail, renderPlanetDetail),
  getPlanet, getPlanetImage
);

const StarshipDetail = withItemDetail(
  renderWithData(ItemDetail, renderStarshipDetail),
  getStarShip, getStarshipImage
);

export {
    UserDetail,
    PlanetDetail,
    StarshipDetail
}