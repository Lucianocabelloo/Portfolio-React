import React, {useRef} from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Section = styled.div`
  height: 100%;
  color: red;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items:center;
  margin-top: 30vh;
`;

const Contact = () => {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.checkValidity()) {
      // Si hay campos inválidos, muestra un mensaje de error
      toast.error('Por favor completa los campos correctamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

      emailjs.sendForm('service_hew07vr', 'template_tpxoaye', form.current, '5c3yyGWTDPm-Ml70x')
        .then((result) => {
            console.log(result.text);
       }, (error) => {
            console.log(error.text);
        });


      toast.success('Mensaje Enviado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  return (
    <>
    <Section id='Contact' className='Section-Contact'>
      <div className='Contact-Info'>
        <h2>Charlemos!</h2>
        <p>
        ¡Hola! ¡Gracias por visitar mi portfolio de desarrollo front end! Si tienes alguna pregunta, sugerencia o proyecto interesante en el que te gustaría colaborar, no dudes en ponerte en contacto conmigo a través de este formulario. Estaré encantado/a de escuchar tus ideas y responder a todas tus consultas lo antes posible. ¡Espero saber de ti pronto!
        </p>
      </div>
        <form ref={form} onSubmit={sendEmail} className='Contact-Form' >

          <input className="input-text" type="text" name='user_name' placeholder='Ingrese nombre' required  />

          <input className="input-text" type="text" name='user_email' placeholder='Ingrese su correo' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  />

          <textarea className='input-area' name='message' placeholder='Ingresa el mensaje' required ></textarea>
          <button className='Contact-Button'> Enviar </button>
        </form>
        <ToastContainer />
    </Section>
    </>
  )
}

export default Contact