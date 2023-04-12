import React from 'react'
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import fotoDePerfil from "../../assets/fotoDePerfil.png"
import download from "../../assets/download.svg"
import github from "../../assets/github.svg"

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
  
  const Tittle = styled.h1`
  font-weight: 900;
      font-style: italic;
      color: #FAFAFA;
      font-size: 86px;
      font-family: roboto;
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
  margin: 16px 0;
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
    <Section id='Inicio' className='Section-Home'>
      <Left className='Section-Left'>
        <Tittle className='Section-Title'>Luciano Cabello</Tittle>
        <SubTittle className='Section-SubTitle'>Soy <span>Front End Developer</span></SubTittle>
        <p>No busco solo desarrollar páginas web, sino crear experiencias digitales únicas para los usuarios..</p>
        
        <Buttons>
        <a className='boton' href="https://drive.google.com/file/d/1YNYqj0W0XHnunH8hnI8ek-9SLgMswCIE/view?usp=sharing"> <img src={download} alt="Document Download SVG File" title="Document Download SVG File" width="50" height="50"></img>Descargar CV</a>
        <a className='boton' href="https://github.com/Lucianocabelloo"> <img className='svg-boton' alt="Github" class="github" height="50" src={github} width="50"></img> GitHub  </a>
        </Buttons>
      </Left>
      <Right className='Section-Right'>
        <Imagen className='Section-Imagen' >
        <img className='img-Perfil' src={fotoDePerfil} alt="Esta es la foto de perfil de Luciano Cabello"/>
        </Imagen>
        </Right>
    </Section>
    </>
  )
}

export default Home