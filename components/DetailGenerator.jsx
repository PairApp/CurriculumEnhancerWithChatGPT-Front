// DetailGenerator.jsx
import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const DetailGenerator = () => (
    <ResponsiveContainer direction="column" responsive={false}>
        <div style={{position:'relative', top:'40px'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
    <span style={{ color: 'white', fontSize: '2vw', fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>GRAB YOUR TOPIC</span>
  </div>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <div style={{ position: 'relative', width: '50%' }}>
        <input
          type="text"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '13.89px',
            border: '1.39px solid white',
            padding: '8px',
            boxSizing: 'border-box',
            color: 'black',
            backgroundColor: 'white',
          }}
          placeholder="Space"
        />
        <div style={{ position: 'relative', display: 'flex', gap: '8px',justifyContent: 'flex-end', marginTop:'8px'}}>
          <img src="/icons/regenerate.svg" alt="Regenerate Icon" width="30" height="30" />
          <img src="/icons/edit.svg" alt="Regenerate Icon" width="30" height="30"/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
      <input type="checkbox" id="gameCheckbox" style={{ height: '2.5em', width: '2.5em' }} />
      <label htmlFor="gameCheckbox" style={{
        color: 'white',
        fontSize: '1.25rem',
        fontFamily: 'Poppins',
        fontWeight: '400',
        margin: 0,
      }}>game</label>

      <input type="checkbox" id="storyCheckbox" style={{ height: '2.5em', width: '2.5em' }} />
      <label htmlFor="storyCheckbox" style={{
        color: 'white',
        fontSize: '1.25rem',
        fontFamily: 'Poppins',
        fontWeight: '400',
        margin: 0,
      }}>story</label>
    </div>
      <div style={{display: 'flex', gap: '8px',justifyContent: 'flex-end', marginTop:'8px'}}>
      <button style={{ cursor:'pointer',width: '36%', height: '100%', paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', boxShadow: '0px 3.7103755474090576px 3.7103755474090576px rgba(0, 0, 0, 0.25)', borderRadius: 20.83, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 7.42, display: 'inline-flex'}}>
    <div style={{color: '#1C2545', fontSize: '1.55vw', fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Generate details   </div>
</button>
      </div>
    </div>
      </div>
  </ResponsiveContainer>
);

export default DetailGenerator;
