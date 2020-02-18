import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ErrorButton from '../ErrorButton';
import './ItemDetail.css';

const ItemDetail = ({item, image, children}) => {
console.log(children);
const records = children()

    return (
      <Row className="detail">
        <Col md="3">
          <img src={ image } alt="" className="w-100" />
        </Col>
  
        <Col md="9">
          <h2>{ item.name }</h2>
          <ul>
            {
              
              React.Children.map(records, (el) => {
                return React.cloneElement(el, { item })
              })
            }
          </ul>
        </Col>
  
        <ErrorButton />
      </Row>
    );
  
};

export default ItemDetail;
