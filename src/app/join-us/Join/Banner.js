"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'

function Banner() {
  return (
    <>
      <Container className='banner-bg d-flex align-items-center' fluid
style={{
  backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1C7C9C2B), url(/images/Join-Us-Banner-Comprossed.jpeg)'
}}
      >
        <Container style={{height:'500'}}>
        <Row className='' fluid>
          <Col lg={6} className='d-flex align-items-center'>
            <p className='p-about fs-5'>If you are about empowering vulnerable communities to build resilience to bounce forward in any humanitarian crisis, Join us!</p>
          </Col>
          </Row>
          </Container>
        </Container>
    </>
  )
}

export default Banner

