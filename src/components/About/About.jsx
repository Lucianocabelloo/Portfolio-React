import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
  height: 100vh;
  color: red;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const About = () => {
  return (
    <Section>About</Section>
  )
}

export default About