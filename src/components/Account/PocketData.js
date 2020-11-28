import React from 'react';

const PocketData = ({ upperText, lowerText }) => {
  return (
    <div className='m-1'>
      <p className='m-0'>
        <strong>{upperText}</strong>
      </p>
      <p className='lead'>{lowerText}</p>
    </div>
  );
};

export default PocketData;
