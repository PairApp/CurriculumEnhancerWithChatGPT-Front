// components/Navbar.js
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const Navbar = () => (
  <ResponsiveContainer direction="row" responsive={true}>
    <div style={{ flex: 1, textAlign: 'right', position:'relative', zIndex:1}}>
      {/* Position the content to the right */}
      <a href="#" style={{ textDecoration: 'none', color: 'white', margin: '10px' }}>
        SmartRobot
      </a>
    </div>
    {/* Add other components as needed */}
  </ResponsiveContainer>
);

export default Navbar;
