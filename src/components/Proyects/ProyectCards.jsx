import React from 'react'
import { Col } from 'react-bootstrap'

const ProyectCards = ({title, img, description ,tecnology}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'> 
            <img src={img} />
            <div className='proj-txtx'>
                <h4 className='Proyect-title'>{title}</h4>
                <h5 className='Proyect-Description'>{description}</h5>
                <p className='Proyect-Tecnology'>{tecnology}</p>
            </div>
        </div>
    </Col>
  )
}

export default ProyectCards