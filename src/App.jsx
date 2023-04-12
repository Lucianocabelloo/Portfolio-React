import './App.css'
import styled from 'styled-components';
import About from './components/About/About';
import Home from './components/Home/Home';
import Proyects from './components/Proyects/Proyects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { BsArrowUpCircleFill } from "react-icons/bs"





const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./assets/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {


  return (
    <div className="App">
      <Container className='Container-App'>
        <header>
        <Home/>
        </header>

        <main>

        <About/>
        <Proyects/>
        <Skills/>
    <a className='Boton-UP' href="#Inicio"> <BsArrowUpCircleFill/> </a>
        <Contact/>

        </main>
      </Container>
    </div>
  )
}

export default App
