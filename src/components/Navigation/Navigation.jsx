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
    <div>
        <nav>
          <Imagen>
            <img src={logo} alt="logo ELECE" />
          </Imagen>
          <div>
          <ul>
            <li>Inicio</li>
            <li>Sobre Mi</li>
            <li>Proyectos</li>
            <li>Skills</li>
            <li>Contacto</li>
          </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navigation