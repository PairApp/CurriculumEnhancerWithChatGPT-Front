import React from 'react';
import Navbar from '../components/Navbar';
import DetailGenerator from '../components/DetailGenerator';
import Container from '../components/ResponsiveContainer';
import Details from '../components/Details';
import Footer from '../components/Footer';

const HomePage = () => (
  <div>
    <Navbar />

    <Container responsive={true}>
      {/* Content for the second container */}
      <div style={{ color: 'white', fontSize: 16, position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto'}}>
      
      <img
    style={{
      position: 'absolute',
      right: '0%', // Adjust this percentage as needed
      bottom: '50%',
      width: '65%', // Adjust this percentage as needed
      height: 'auto', // Maintain aspect ratio
      boxShadow: '0px 4.288288116455078px 4.288288116455078px rgba(0, 0, 0, 0.25)',
      borderRadius: '10.72px',// Use 'px' for border-radius
      transform: 'rotate(-50deg)',
      opacity: 0.5,
      zIndex:0

    }}
    src="/images/robot.png"
    alt="Placeholder Image"
  />
<img
    style={{
      position: 'absolute',
      right: '50%', // Adjust this percentage as needed
      bottom: '25%',
      width: '65%', // Adjust this percentage as needed
      height: 'auto', // Maintain aspect ratio
      boxShadow: '0px 4.288288116455078px 4.288288116455078px rgba(0, 0, 0, 0.25)',
      borderRadius: '10.72px',// Use 'px' for border-radius
      transform: 'rotate(40deg)',
      opacity: 0.3,
      zIndex:0

    }}
    src="/images/robot.png"
    alt="Placeholder Image"
  />
  <img
    style={{
      position: 'relative',
      left: '20%', // Adjust this percentage as needed
      top: '0',
      width: '60%', // Adjust this percentage as needed
      height: 'auto', // Maintain aspect ratio
      boxShadow: '0px 4.288288116455078px 4.288288116455078px rgba(0, 0, 0, 0.25)',
      borderRadius: '10.72px',// Use 'px' for border-radius
      zIndex: 3
    }}
    src="/images/robot.png"
    alt="Placeholder Image"
  />
</div>

      <div style={{ width: '100%', height: '100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{position: 'relative', left:'0px', top:'20px'}}>
  <span style={{ color: 'white', fontSize: '2.5vw', fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Let </span>
  <span style={{ color: '#8FB108', fontSize: '2.5vw', fontFamily: 'Poppins', fontWeight: 700, wordWrap: 'break-word' }}>ChatGPT</span>
  <span style={{ color: 'white', fontSize: '2.5vw', fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}> be your creative <br/>companion in crafting <br/>captivating </span>
  <span style={{ color: 'white', fontSize: '2.5vw', fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: 900, wordWrap: 'break-word' }}>stories </span>
  <span style={{ color: 'white', fontSize: '2.5vw', fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>and exciting<br/> </span>
  <span style={{ color: 'white', fontSize: '2.5vw', fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: 700, wordWrap: 'break-word' }}>games!<br/><br/></span>
  <span style={{ color: 'white', fontSize: '2.5vw', fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Start with</span>
  <span style={{ color: 'white', fontSize: '2.5vw', fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: 700, wordWrap: 'break-word' }}> </span>
  <button
  style={{
    paddingLeft: 17.03,
    paddingRight: 17.03,
    paddingTop: 7.30,
    paddingBottom: 7.30,
    boxShadow: '0px 4.866666793823242px 4.866666793823242px rgba(0, 0, 0, 0.25)',
    borderRadius: 12.17,
    overflow: 'hidden',
    border: '1.22px white solid',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9.73,
    display: 'inline-flex',
    background: 'transparent', // Set the background to transparent for a button
    cursor: 'pointer', // Add cursor style for better user experience
    outline: 'none', // Remove the default focus outline
    textDecoration: 'none', // Remove the default text decoration
  }}
  onClick={() => {
    // Add the onClick function for button functionality
    console.log('Button clicked!');
    // You can add your logic or action here
  }}
>
  <div
    style={{
      color: 'white',
      fontSize: '2vw',
      fontFamily: 'Poppins',
      fontWeight: '400',
      wordWrap: 'break-word',
    }}
  >
    Generating topic
  </div>
</button>

</div>
</div>
    </Container>
    {/* <img
    style={{
      position: 'absolute',
      right: '-8%', // Adjust this percentage as needed
      top: '50%',
      width: '30%', // Adjust this percentage as needed
      height: '35%', // Maintain aspect ratio
      boxShadow: '0px 4.288288116455078px 4.288288116455078px rgba(0, 0, 0, 0.25)',
      borderRadius: '10.72px',// Use 'px' for border-radius
      opacity:0.2,
      transform: 'rotate(-45deg)'
    }}
    src="/images/robotWithoutB.png"
    alt="Placeholder Image"
  /> */}
    <DetailGenerator></DetailGenerator>
    <Details></Details>
    <Footer />
  </div>
);

export default HomePage;

