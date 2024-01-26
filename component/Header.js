"use client"

import { Navbar, Container, Nav, NavDropdown, Button, Offcanvas} from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'


const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className=" d-lg-block cac_main">
        <Container>
        <Link href="/" className="navbar-brand">
            <Image src='/images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo' />
            
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-none' />
          <Navbar.Collapse id="basic-navbar-nav  " className='cac_nav_item'>
            <Nav className="ms-auto ">
              <Link href="/" className="me-4 nav-link fs-6">Home</Link>
              <Link href="/about-us" className="me-4 nav-link fs-6">About Us</Link>
              <Link href="/action" className="me-4 nav-link fs-6">Our Action</Link>
              <Link href="/impact" className="me-4 nav-link fs-6">Our Impact</Link>
              <NavDropdown title="Our Initiatives" id="basic-nav-dropdown" className="me-4">
                <Link className='dropdown-item fs-6' href="/shilp">SHILP</Link>
                <NavDropdown.Divider />
                <Link className='dropdown-item fs-6' href="/economic-resilience">Economic resilience</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://covidactioncollab.org/vaxnow/" target='_blank'>VaxNow</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.precisionhealth.in/" target='_blank'>Precision Health</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resource Hub" id="basic-nav-dropdown" className="me-4">
              <Link className='dropdown-item fs-6' href="#action/1">Knowledgebase</Link>
                <NavDropdown.Divider />
                <Link className='dropdown-item fs-6' href="#action/2">Media</Link>
              </NavDropdown>
              <Link className='me-4 nav-link fs-6' href="/join-us">Join Us</Link>
              <Link className='me-4 nav-link fs-6' href="/contact-us">Contact Us</Link>
              
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-primary"className='d-block d-lg-none' onClick={handleOffcanvasShow}>
          <span className="navbar-toggler-icon"></span>

          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <Image src='./images/cac_Logo.svg' width={200} height={50} alt='cac log' className='img_logo'></Image></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column ">
            <Nav.Link href="/" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Home</Nav.Link>
            <Nav.Link href="/about" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>About Us</Nav.Link>
            <Nav.Link href="/action" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Our Action</Nav.Link>
            <Nav.Link href="/impact" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Our Impact</Nav.Link>
            <NavDropdown title="Our Initiatives" className='m_menu_dropdown fs-5' id="offcanvas-nav-dropdown">
              <NavDropdown.Item href="/shilp" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>SHILP</NavDropdown.Item>
              <NavDropdown.Item href="#action/2" className='m_menu_item fs-5'  onClick={handleOffcanvasClose}>Economic resilience</NavDropdown.Item>
              <NavDropdown.Item href="https://covidactioncollab.org/vaxnow/" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>VaxNow</NavDropdown.Item>
            <NavDropdown.Item href="https://www.precisionhealth.in/" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Precision Health</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resource Hub" className='m_menu_item fs-5'  id="offcanvas-nav-dropdown">
              <NavDropdown.Item href="/shilp" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Knowledgebase</NavDropdown.Item>
           
              <NavDropdown.Item href="#action/2" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Media</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/join-us" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Join Us</Nav.Link>
            <Nav.Link href="/contact-us" className='m_menu_item fs-5' onClick={handleOffcanvasClose}>Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
