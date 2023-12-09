// components/Footer.js
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const Footer = () => (
    <ResponsiveContainer direction="column" style={{ marginTop: '20px' }} responsive={false}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', height: '2px', border: 'none', borderBottom: '2px solid rgba(255, 255, 255, 0.50)' }}></div>
    <a href="https://www.openai.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1,textDecoration: 'none', color: 'white', margin: '10px' }}>
      openai.com
    </a>
  </ResponsiveContainer>

);

export default Footer;
