import React from 'react'
import "./Navigation.css"
import styled from 'styled-components'
import logo from "../../assets/Logo.png"


const Imagen = styled.div`
  height: 150px;
  width: 150px;
`;

const Navigation = () => {
  return (
    <div className='Nav-Div'>
        <nav>
          <Imagen>
            <img src={logo} alt="logo ELECE" />
          </Imagen>
          <div>
          <ul>
            <li className='Active'> <a href="#">Inicio</a> </li>
            <li> <a href="#About"> Sobre Mi </a> </li>
            <li> <a href="#Proyects"> Proyectos </a></li>
            <li> <a href="#Skills">Skills</a></li>
            <li> <a href="#Contact"> Contacto </a></li>
          </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navigation