"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'



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
        <Row>
          <Col lg={4} sm={12}>
          <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1"></Form.Group>
          <Form.Label className='label-style'>Full Name</Form.Label>
          <Form.Control placeholder="" />
          </Col>
          <Col lg={4} sm={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"></Form.Group>
          <Form.Label className='label-style'> Mobile No. </Form.Label>
          <Form.Control placeholder="" />
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"></Form.Group>
        <Form.Label className='label-style'>Email ID</Form.Label>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
           <Col lg={12} sm={12}>
           <Form.Group className="mt-5 mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label-style'>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
           </Col>
        </Row>
        <Row>
        <Col>
        <Button className='btn-form border-0 p-2' type="submit">
        Send Message
      </Button>
           </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contactform

