/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image';
import CountUp from "react-countup"

function OurImpact() {
  return (
    <>
          <Container>
       <h1 className='t-action'>Our Impact</h1>
        <p className='p-action'> Since March 2020, #COVIDActionCollab, powered by its diverse and determined partners across India, has been working tirelessly to reach the last mile. #COVIDActionCollab is now Community Action Collab and our impact continues on…</p>
      </Container>
      <Container fluid>      
        <Row>
          <Col lg={2} sm={6} md={6} xs={6} className='g-0 order-sm-0 order-xs-0 order-md-0 order-lg-0'>
            <Image src="/images/impact.jpeg" width={280} height={400} className='w-100' /></Col>
          <Col lg={2} sm={6} md={6} xs={6} className='circle-overlay g-0 order-sm-0 order-xs-0 order-md-0 order-lg-1' >
            <Row className='d-flex flex-column'><Col>
          <CountUp
                  start={0}
                  end={368}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment"
            ></CountUp></Col><Col>
              <p className='fs-4 text-white text-center'>Partners</p></Col>
              </Row>
          </Col>
          <Col lg={2} sm={6} md={6} xs={6} className='g-0 order-sm-4 order-xs-4 order-md-4 order-lg-2'>
            <Image src="/images/DSC03073.png" width={280} height={400} className='w-100' /></Col>
          <Col lg={2} sm={6} md={6} xs={6} className='circle-overlay-1 g-0 order-sm-3 order-xs-3 order-md-3 order-lg-3' >
            <Row className='d-flex flex-column'><Col className='d-flex justify-content-center'>
          <CountUp
                  start={0}
                  end={2}
                  separator=""
                  prefix=""
                  suffix=".8CR"
                  className="increment"
            ></CountUp></Col><Col>
              <p className='fs-4 text-white text-center'>Service Instances</p></Col>
              </Row>
          </Col>
          <Col lg={2} sm={6} md={6} xs={6} className='g-0 order-sm-5 order-xs-5 order-md-5 order-lg-5'>
            <Image src="/images/1003119615.jpeg" width={280} height={400} className='w-100' /></Col>
          <Col lg={2} sm={6} md={6} xs={6} className='circle-overlay-2 g-0 order-sm-5 order-xs-5 order-md-5 order-lg-5' >
            <Row className='d-flex flex-column'><Col className='d-flex justify-content-center'>
          <CountUp
                  start={0}
                  end={36}
                  separator=" "
                  prefix=""
                  suffix=""
                  className="increment"
            ></CountUp></Col><Col>
              <p className='fs-4 text-white text-center'>Across all States & Union Territories</p></Col>
              </Row>
          </Col>
      </Row>
      </Container>
      
      
      </>
  )
}

export default OurImpact
