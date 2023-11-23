import React, { useState } from 'react';

const Example7 = () => {
  const [color, setColor] = useState('black');

  const newcolor = () => {
    const changecolor = color === 'black' ? 'red' : 'black';
    setColor(changecolor);
  };

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <p>backgroundColor is {color}</p>
      </div>

      <button 
      
      
      style={{ position: 'absolute', top: 0, right: 0 }}
      onClick={newcolor} >
        Change Color
      </button>
    </>
  );
};

export default Example7;

