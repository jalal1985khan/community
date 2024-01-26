"use client"
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from 'next/image'

function Banner() {
  return (
    <>
      <Container className='banner-bg d-flex align-items-center' fluid
style={{
  backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1C7C9C2B), url(/images/action_banner.jpeg)'
}}
      >
        <Container style={{height:'500'}}>
        <Row className='' fluid>
          <Col lg={6} className='d-flex align-items-center'>
            <p className='p-about fs-5 fw-light'>Today, we understand that the impact of COVID-19 is long-term and will continue to affect vulnerable communities. Pandemics are here to stay, and there is an increasing likelihood that we will experience more pandemics in our lifetime. Yet, while for the world, the pandemic was a time of fear, hopelessness and uncertainty, for vulnerable people, the experience of these feelings is a constant. They live through shocks and disasters daily.</p>
          </Col>
          </Row>
          </Container>
        </Container>
    </>
  )
}

export default Banner

