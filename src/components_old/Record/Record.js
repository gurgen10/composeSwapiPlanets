import React from 'react';

const Record = ({ lable, objKey, item }) => {
  return (
    <li>{lable}: {item[objKey]}</li>
  )
};

export default Record;