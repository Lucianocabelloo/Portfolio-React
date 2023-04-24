import React from 'react'
import styled from 'styled-components';
import proyecto1 from "../../assets/Proyecto1.png";
import proyecto2 from "../../assets/Proyecto2.png";
import proyecto3 from "../../assets/Proyecto3.png";
import proyecto4 from "../../assets/Proyecto4.png";
import proyecto5 from "../../assets/Proyecto5.png";
import proyecto6 from "../../assets/Proyecto6.png";
import proyecto7 from "../../assets/Proyecto7.png";
import proyecto8 from "../../assets/Proyecto8.png";
import background from "../../assets/background.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import ProyectCards from './ProyectCards';
import "./proyects.css"



 const Proyectos = [{
  id: 1,
  title: ' Linaje',
  description: 'En este proyecto utilice tecnologias avanzadas para poder realizar un Ecommerce ',
  tecnology: "React HTML CSS Javascript Firebase",
  img: proyecto1
},{
  id: 2,
  title: 'To do List',
  description: 'En este proyecto utilice diversas tecnologias para poder realizar un To do List',
  tecnology: "HTML CSS Javascript",
  img: proyecto2
},
{
  id: 3,
  title: 'Lavarrap',
  description: 'En este proyecto utilice tecnologias basicas para poder realizar una Web de lavanderia',
  tecnology: "HTML CSS Bootstrap",
  img: proyecto3
},
{
  id: 4,
  title: 'TucuMiel',
  description: 'En este proyecto utilice tecnologias basicas para poder realizar un Ecommerce',
  tecnology: "HTML CSS Bootstrap",
  img: proyecto4
},
{
  id: 5,
  title: 'Pelis Ya',
  description: 'En este proyecto utilice diversas tecnologias para poder realizar una web de Peliculas',
  tecnology: "React HTML CSS Javascript",
  img: proyecto5
},
{
  id: 6,
  title: 'Ta Te Ti',
  description: 'En este proyecto utilice diversas tecnologias para poder realizar un juego Ta Te TI',
  tecnology: "React, HTML, CSS,Javascript",
  img: proyecto6
},
{
  id: 7,
  title: 'Fc Refrigeracion',
  description: 'En este proyecto utilice tecnologias basicas para poder realizar una Web de Refrigeracion',
  tecnology: "HTML,CSS,Bootstrap",
  img: proyecto7
},
{
  id: 8,
  title: 'Cat Meme Generator',
  description: 'En este proyecto utilice diversas tecnologias para poder realizar una Generador de Memes',
  tecnology: "React, HTML, CSS, Javascript",
  img: proyecto8
},

]



const Proyects = () => {

  const Section = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;



  return (
    <Section id='Proyects'>
       <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Estos fueron los proyectos que fui realizando desde que comence en el mundo del Desarrollo Front End, en ellos utilizo tecnologias como por ejemplo HTML, CSS, Javascript, React, Firebase, ademas de algunos frameworks para estilar como por ejemplo Bootstrap y Material UI</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
            {Proyectos.map((project, index) =>(
              <ProyectCards
              key={index}
              {...project}
              />
            ))}
          </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={background}></img>
    </section>
    </Section>
  )
}

export default Proyects

          