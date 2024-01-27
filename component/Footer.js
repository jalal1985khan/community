"use client"
import React from 'react';
import {Row,Col, Container, Card, Nav} from 'react-bootstrap'
import Image from 'next/image';
import {Icon} from 'react-bootstrap-icons';
import Link from 'next/link';
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
     <Container className='footer-cs text-center pt-4 pb-4' fluid>
        <Row>
            <Col lg={2}>
            </Col>
            <Col className='' >
              <h3 className='t-footer-1 fs-3 fw-light'>Sitemap</h3>
              <ul className='footer-1'>
                <li><Link href='/about' className='Menu_footer fs-6 fw-light'> About Us</Link></li>
                <li><Link href='/about' className='Menu_footer fs-6 fw-light'>Our Mission </Link>
                </li>
                <li><Link href='/about' className='Menu_footer fs-6 fw-light'>What Is Community Action Collab?</Link> </li>
                <li> <Link href='/about' className='Menu_footer fs-6 fw-light'>Media</Link></li>
                <li> <Link href='/impact' className='Menu_footer fs-6 fw-light'>Our Impact</Link></li>
                <li><Link href='/action' className='Menu_footer fs-6 fw-light'> Our Action</Link> </li>
              </ul>
            </Col>
            <Col>
                <ul className='footer-1 pt-5'>
                <li><Link href='/shilp' className='Menu_footer fs-6 fw-light'> Shilp</Link></li>
                <li><Link href='/shilp' className='Menu_footer fs-6 fw-light'> Economic Resilience</Link> </li>
                <li><Link href='https://covidactioncollab.org/vaxnow/' className='Menu_footer fs-6 fw-light'>  Special Focus Areas (VaxNow)</Link> </li>
                 <li> <Link href='/shilp' className='Menu_footer fs-6 fw-light'> Invest For Impact</Link></li>
              <li> <Link href='/contact-us' className='Menu_footer fs-6 fw-light'> Contact Us</Link></li>
            </ul>
            <Row className='d-flex flex-row'>
              <Col className='text-start' lg={2} sm={2} xs={2} md={2}><Link href="#"><FaTwitterSquare size={30} className='f-icons'/></Link></Col>
              <Col className='text-start' lg={2} sm={2} xs={2} md={2}><Link href="#"><FaLinkedin size={30} className='f-icons'/></Link></Col>
            </Row>
            </Col>
            <Col lg={3}>
            <h3 className='t-footer-1 fs-3 fw-light'>Contact us</h3>
            <p className='p-footer-3 fs-6 fw-light'>We would love to hear from you. Please write to us at <Link style={{ color: '#fff500' }}href="mailto:communityactioncollab@catalysts.org">communityactioncollab@catalysts.org</Link></p>
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
             <p className='p_copy'>Copyright © {year} Catalyst Management Services Pvt. Ltd.</p>
          </Col>
        </Row>
        </Container>
    </>
  )
}

export default Footer
