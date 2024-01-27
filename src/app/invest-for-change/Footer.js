import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import Link from 'next/link'


function Footer() {
    const d = new Date();
let year = d.getFullYear();
  return (
    <Container fluid style={{background:'#EFEDED'}} className='p-4'>
          <Row>
              <Col lg={5} sm={12} className='mt-5 order-5 order-lg-0'><p className='fs-5'>Copyright © {year}, Inc.</p></Col>
              <Col lg={2}  className='mt-4 col-sm-auto'><Link href="https://covidactioncollab.org/" className='main-color'><Image src="/images/covid-logo.png" width={170} height={60}  className='img-fluid'/></Link></Col>
              <Col lg={2} className='mt-4 col-sm-auto'><Link href="https://communityactioncollab.org/" className='main-color'><Image src="/images/comm-logo.png" width={180} height={60} className='img-fluid'/></Link></Col>
              <Col lg={3} sm={12} className='mt-4'>
                  <Row className=''>
                      <Col className='d-flex justify-content-end invest-social'>
                          <Link href="https://www.youtube.com/@communityactioncollab"><FaYoutubeSquare size={35} /></Link></Col>
                      <Col className='invest-social d-flex justify-content-center' >
                          <Link href="https://twitter.com/CovActionCollab"><FaSquareXTwitter size={35} /></Link></Col>
                      <Col className='d-flex justify-content-start invest-social'><Link href="https://www.linkedin.com/showcase/community-action-collab/"><FaLinkedin size={35} /></Link></Col></Row>
              </Col>
          </Row>
    </Container>
  )
}

export default Footer
