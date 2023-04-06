import React from 'react'
import styled from 'styled-components';

import img from "../../assets/about.png"

const Section = styled.div`
  height: 100vh;
  width: 100%
  color: red;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
height: 500px;
width: 500px;
display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
`
const Right = styled.div`
height: 500px;
width: 500px;
display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
}
`


const About = () => {
  return (
    <>
    <Section>
      <div className='About-Container'>

      <Left>
      <img src={img} alt="" />
      </Left>
      <Right>
      <h2>Sobre mi</h2>
      <p>Soy un programador Front End apasionado por el desarrollo web y siempre me mantengo actualizado con las últimas tecnologías. Me considero una persona proactiva, enfocada en brindar soluciones rápidas y efectivas. Disfruto trabajando en equipo y colaborando con otros desarrolladores y diseñadores para encontrar soluciones creativas. Estoy comprometido en mejorar la experiencia del usuario y siempre estoy buscando formas innovadoras para resolver cualquier desafío.</p>
      </Right>
      
      </div>
    </Section>
    </>
  )
}

export default About