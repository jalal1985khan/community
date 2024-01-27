"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'

function Banner() {
  return (
    <>
      <Container className='banner-bg d-flex align-items-center' fluid style={{
  backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1C7C9C2B), url(/images/about_banner_1.jpeg)'
}}>
        <Container style={{height:'500'}}>
        <Row className='' fluid>
          <Col lg={6} className='d-flex align-items-center'>
            <p className='p-about fs-5 fw-light'>Community Action Collab (CAC) is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions in their everyday emergencies and is ready for future humanitarian crises (climate & health). The platform orchestrates and influences the actions and decisions of 360 partners, governments and other alliances, enabling them to solve issues affecting the vulnerable and ensuring access to critical livelihood, health, social protection and climate impact solutions.</p>
          </Col>
          </Row>
          </Container>
        </Container>
    </>
  )
}

export default Banner
