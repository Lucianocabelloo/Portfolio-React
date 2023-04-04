import React from 'react'
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import fotoDePerfil from "../../assets/fotoDePerfil.png"

const Section = styled.div`
  height: 70vh;
  color: red;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`;

const Right = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
width: 50%;


`
const Left = styled.div`
display:flex;
justify-content: center;
width: 50%;
align-items: center;
flex-direction: column;
font-family: 'Great Vibes', cursive;
font-family: 'Roboto', sans-serif;
align-items: baseline;
`

const Tittle = styled.div`
font-weight: 900;
    font-style: italic;
    color: #FAFAFA;
    font-size: 86px;
    `

const SubTittle = styled.div`
font-weight: 500;
    font-style: italic;
    color: #FAFAFA;
    font-size: 36px;
`



const Buttons = styled.div`
display: flex;
justify-content: center;
gap: 16px;
align-items: center;
width: 50%;
`

const Imagen = styled.div`
height: 500px;
width: 500px;
border-radius: 100%`

const Home = () => {
  return (
    <>
        <Navigation/>
    <Section>
      <Left>
        <Tittle>Luciano Cabello</Tittle>
        <SubTittle>Soy <span>Front End Developer</span></SubTittle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe recusandae deserunt? Iste totam.</p>
        <Buttons>
        <button>Contact me</button>
        <button>GitHub</button>
        </Buttons>
      </Left>
      <Right>
        <Imagen>
        <img src={fotoDePerfil} alt="Esta es la foto de perfil de Luciano Cabello"/>
        </Imagen>
        </Right>
    </Section>
    </>
  )
}

export default Home