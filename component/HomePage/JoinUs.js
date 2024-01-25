"use client"
import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap'
import Image from 'next/image';


function JoinUs() {
  return (
    <>
          <Container className='g-0'>
          <Container className='mt-4 '>
        <Row fluid>
           <Col className=''>
              <h1 className='t-action'>Join Us</h1>
              <p className='p-action'> We’re looking to partner with organisations and individuals aspiring to empower vulnerable communities to build their resilience against any humanitarian crises.</p>
           </Col> 
</Row>
</Container>

      </Container>
<Container fluid className=''>
    <Row>
        <Col lg={6} className='Partner-With-Us order-sm-0 order-xs-0 order-md-0 order-lg-0' >

        </Col>
        <Col lg={6} className='Partner-With-Us-1 order-sm-0 order-xs-0 order-md-0 order-lg-0'>
            <h2 className='t-partner'>
            Partner With Us
            </h2>
            <p className='p-partner'>Implementing Organisations: NGOs, CBOs and Government bodies working at the grassroots level.</p>
            <a href='https://registration.communityactioncollab.org/partner-sign-up/new'className='btn btn-partner'>
                JOIN US
            </a>
           
        </Col>
    </Row>
    
    <Row>
        
        <Col lg={6} className='volunteer-1 order-sm-4 order-xs-4 order-md-4 order-lg-4'>
            <h2 className='t-volunteer'>
            Volunteer With Us
            </h2>
            <p className='p-volunteer pt-4'>We invite stellar, driven and passionate volunteers who’d like to contribute to <br/>resilience building within vulnerable communities.</p>
            <p className='mail-us'>WRITE TO US AT <a href='mailto:COMMUNITYACTIONCOLLAB@CATALYSTS.ORG'>COMMUNITYACTIONCOLLAB@CATALYSTS.ORG</a></p>
        </Col>
        <Col lg={6} className='volunteer order-sm-3 order-xs-3 order-md-3 order-lg-4'>
           
        </Col>
    </Row>
    <Row>
        <Col lg={6} className='Invest order-sm-5 order-xs-5 order-md-5 order-lg-5'> 
        </Col>
        <Col lg={6} className='Invest-1 order-sm-5 order-xs-5 order-md-5 order-lg-5'>
            <h2 className='t-partner'>
            Invest In Community Action Collab
            </h2>
            <p className='p-partner'>Community Action Collab isn’t merely an aggregation of partners but an aggregation of capacities, through which key high-impact initiatives have been developed.</p>
            <a href=''className='btn btn-partner'>
               FIND OUT MORE
            </a>
           
        </Col>
    </Row>
</Container>


    </>
  )
} 

export default JoinUs
