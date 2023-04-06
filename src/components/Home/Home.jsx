import React from 'react'
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import fotoDePerfil from "../../assets/fotoDePerfil.png"

export function useStyles () {

  const Section = styled.div`
    height: 70vh;
    color: red;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    gap: 48px;
  
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
  width: 100%;
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
  gap: 16px;
  align-items: center;
  width: 100%;
  `
  
  const Imagen = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 100%`

  return { Section, Imagen, Buttons, SubTittle, Tittle, Left, Right }

} 


const Home = () => {

  const {Section,
         Buttons,
         Tittle,
         SubTittle,
         Left,
         Right,
         Imagen} = useStyles()


  return (
    <>
        <Navigation/>
    <Section>
      <Left>
        <Tittle>Luciano Cabello</Tittle>
        <SubTittle>Soy <span>Front End Developer</span></SubTittle>
        <p>No busco solo desarrollar páginas web, sino crear experiencias digitales únicas para los usuarios..</p>
        <Buttons>
        <button className='boton'>Contact me</button>
        <button className='boton'>GitHub</button>
        </Buttons>
      </Left>
      <Right>
        <Imagen>
        <img className='img-Perfil' src={fotoDePerfil} alt="Esta es la foto de perfil de Luciano Cabello"/>
        </Imagen>
        </Right>
    </Section>
    </>
  )
}

export default Home