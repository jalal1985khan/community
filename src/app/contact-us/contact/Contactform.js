"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Contact from '../../../../utils/ContactForm';



function Contactform() {
  return (
    <>
      <Container fluid className='contacform p-5'>
        <Row>
          <Col>
             <h2 className='text-white fs-1 fw-light'> Contact us   </h2>
             <p className='fs-5 fw-light text-white'>We would love to hear from you. Please write to us at communityactioncollab@catalysts.org or leave us a message below.</p>
          </Col>
        </Row>
      </Container>
      <Container className='formdata-1'>
      <Contact/>
      </Container>
      
    </>
  )
}

export default Contactform

