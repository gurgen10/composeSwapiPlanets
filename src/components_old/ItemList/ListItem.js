import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './ListItem.css';

const ListItem = ({ items, getItemId, children }) => {
console.log('items',items);

    const content = items.map((el) => {
      return (
        <ListGroup.Item 
          onClick={ () => getItemId(el.id) }
          variant="dark"
          action
          key={ el.id }
        >
          {children(el)}
        </ListGroup.Item>
      )
    });

    return (
      <ListGroup>
        { content }
      </ListGroup>
    );
};

export default ListItem;
