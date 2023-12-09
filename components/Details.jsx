// components/Footer.js
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const sentences = [
    'This is the first sentence.',
    'Here comes the second sentence.',
    'And now, the third sentence.',
    'This is the fourth sentence.',
  ];

const Footer = () => (
    <ResponsiveContainer direction="column"  responsive={false}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center',color:'white', fontSize: '2vw', fontFamily: 'Poppins', fontWeight: '400' }}>Check out the details</div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize: '2vw', fontFamily: 'Poppins', fontWeight: '400'}}>
        <ResponsiveContainer>
      {sentences.map((sentence, index) => (
        <div key={index}>{sentence}</div>
      ))}
    </ResponsiveContainer>
    </div>
  </ResponsiveContainer>

);

export default Footer;