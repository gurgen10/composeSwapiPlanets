import React from 'react';

const RowCol = ({left, right}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-5">
          { left }
        </div>

        <div className="col-md-5 ml-5">
          { right }
        </div>
      </div>
    </div>
  )
};

export default RowCol;