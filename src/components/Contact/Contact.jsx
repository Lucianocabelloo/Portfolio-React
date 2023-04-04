import React from 'react'
import styled from 'styled-components';
import Footer from '../Footer/Footer';




const Section = styled.div`
  height: 90vh;
  color: red;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Contact = () => {
  return (
    <>
    <Section>
      <h1>Este es el contacto</h1>
    </Section>
    <Footer/>
    </>
  )
}

export default Contact