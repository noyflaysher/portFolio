import React from 'react';
import './header.css';
import Typed from 'react-typed';

function Header() {
  return (
    <div className='main-info'>
      <h1>Hi Everyone</h1>
      <Typed
        className='typed'
        strings={[' ', 'I am Noy Flaysher', 'Full Stack developer', ' ', ' ']}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default Header;
