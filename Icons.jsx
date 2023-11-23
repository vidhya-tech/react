import React, { useState } from 'react';

const Icons = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <div className={`navbar ${isActive ? 'active' : ''}`}>
  
      <a href="#" className="btn" onClick={handleButtonClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Download</a></li>
        </ul>
      </div>
    </div>
      <div className="text-box">
      <h1>World's Biggest university</h1>
      <p>
        Making a website is now one of the easiest things in the world. You
        just need to learn HTML, CSS,
        <br />
        JavaScript, and you are good to go.
      </p>
      <button className="hero-btn">Visit us to know More</button>
    </div>
  </>
  );
};

export default Icons;



    
  


 