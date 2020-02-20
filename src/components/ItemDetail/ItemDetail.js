import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Loading from '../Loading';
import ErrorButton from '../ErrorButton';

import './ItemDetail.css';

class ItemDetail extends Component {

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    if (this.props.itemId) {
      this.getItem()
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.getItem()
    }
  }

  getItem = async () => {
    const { itemId, getData, getImage } = this.props;
    
    const item = await getData(itemId);
    const image = getImage(itemId);
    
    this.setState({ item, image });
  }

  render() {
    const { item, image } = this.state;
    
    if (!item) return <Loading />;

    return (
      <Row className="detail">
        <Col md="3">
          <img src={ image } alt="" className="w-100" />
        </Col>
  
        <Col md="9">
          <h2>{ item.name }</h2>
          <ul>
            {
              React.Children.map(this.props.children, (el) => {
                return React.cloneElement(el, { item })
              })
            }
          </ul>
        </Col>
  
        <ErrorButton />
      </Row>
    );
  }
};

export default ItemDetail;
