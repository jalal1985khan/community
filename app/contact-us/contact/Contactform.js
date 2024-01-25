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
             <h2> Contact us   </h2>
             <p>We would love to hear from you. Please write to us at communityactioncollab@catalysts.org or leave us a message below.</p>
          </Col>
        </Row>
      </Container>
      <Container className='formdata-1'>
        <Row>
          <Col>
          <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1"></Form.Group>
          <Form.Label className='label-style'>Full Name</Form.Label>
          <Form.Control placeholder="" />
          </Col>
          <Col>
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
           <Col>
           <Form.Group className="mt-5 mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label-style'>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
           </Col>
        </Row>
        <Row>
        <Col>
        <Button className='btn-form' type="submit">
        Submit
      </Button>
           </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contactform

