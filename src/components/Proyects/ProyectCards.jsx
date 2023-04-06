import React from 'react'
import { Col } from 'react-bootstrap'

const ProyectCards = ({title, img, description ,tecnology}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'> 
            <img src={img} />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <h5>{description}</h5>
                <p>{tecnology}</p>
            </div>
        </div>
    </Col>
  )
}

export default ProyectCards