import React, { useState } from 'react';

const Component= () => {
  
  const [isTrue, setIsTrue] = useState(false);

  
  const changecolor = () => {
    setIsTrue(!isTrue);
  };

  
  const backgroundColor = isTrue ? 'black' : 'white';

  return (
    <div style={{ backgroundColor, padding: '50px' }}>
      
      <p style={{color:'blue'}}> background color.style </p>
      <button onClick={changecolor}>
        changecolor  ({isTrue ? 'True' : 'False'})
      </button>
    </div>
  );
};

export default Component;
