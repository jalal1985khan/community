"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'

function Banner() {
  return (
    <>
      <Container className='banner-bg d-flex align-items-center' fluid
style={{
  backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1C7C9C2B), url(/images/Resource-Hub-Banner.png)'
}}
      >
        <Container style={{height:'500'}}>
        <Row className='' fluid>
          <Col lg={6} className='d-flex align-items-center'>
            <h2 className='fs-1 fw-light'>Resource Hub</h2>
          </Col>
          </Row>
          </Container>
        </Container>
    </>
  )
}

export default Banner

