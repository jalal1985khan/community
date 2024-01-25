"use client"
import React from 'react';
import {Row,Col, Container, Card, Nav} from 'react-bootstrap'
import Image from 'next/image';
import {Icon} from 'react-bootstrap-icons';
import Link from 'next/link';
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {

  return (
    <>
     <Container className='footer-cs text-center pt-4 pb-4' fluid>
        <Row>
            <Col lg={2}>
            </Col>
            <Col className='' >
              <h3 className='t-footer-1'>Sitemap</h3>
              <ul className='footer-1'>
                <li><Link href='/about' className='Menu_footer'> About Us</Link></li>
                <li><Link href='/about' className='Menu_footer'>Our Mission </Link>
                </li>
                <li><Link href='/about' className='Menu_footer'>What Is Community Action Collab?</Link> </li>
                <li> <Link href='/about' className='Menu_footer'>Media</Link></li>
                <li> <Link href='/impact' className='Menu_footer'>Our Impact</Link></li>
                <li><Link href='/action' className='Menu_footer'> Our Action</Link> </li>
              </ul>
            </Col>
            <Col>
                <ul className='footer-1 pt-5'>
                <li><Link href='/shilp' className='Menu_footer'> Shilp</Link></li>
                <li><Link href='/shilp' className='Menu_footer'> Economic Resilience</Link> </li>
                <li><Link href='https://covidactioncollab.org/vaxnow/' className='Menu_footer'>  Special Focus Areas (VaxNow)</Link> </li>
                 <li> <Link href='/shilp' className='Menu_footer'> Invest For Impact</Link></li>
              <li> <Link href='/contact-us' className='Menu_footer'> Contact Us</Link></li>
            </ul>
            <Row className='d-flex flex-row'>
              <Col className='text-start' lg={2} sm={2} xs={2} md={2}><Link href="#"><FaTwitterSquare size={30} className='f-icons'/></Link></Col>
              <Col className='text-start' lg={2} sm={2} xs={2} md={2}><Link href="#"><FaLinkedin size={30} className='f-icons'/></Link></Col>
            </Row>
            </Col>
            <Col lg={3}>
            <h3 className='t-footer-1'>Contact us</h3>
            <p className='p-footer-3'>We would love to hear from you. Please write to us at <Link style={{ color: '#fff500' }}href="mailto:communityactioncollab@catalysts.org">communityactioncollab@catalysts.org</Link></p>
           < Image src="/images/Path-319.svg" width={128}  height={62} alt='socila' className='m-2'></Image>
           <Image src="/images/cac-logo.svg" width={180}  height={64} alt='socila'></Image>
            </Col>
            <Col  lg={2}>
            </Col>
        </Row>

        </Container> 
        <Container fluid>
        <Row>
          <Col className='bg-copy'>
             <p className='p_copy'>Copyright ©2024 Catalyst Management Services Pvt. Ltd.</p>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default Footer
