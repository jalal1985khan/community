'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import InvestContact from '../../../utils/InvestContact'

function Contact() {
  return (
    <div>
          <Container className='mt-5' id="invest">
              <h2 className='fs-1 fw-light'>Invest in Change</h2>
              <p className='fs-5'>Invest to accelerate transformative impact on vulnerable communities so they can survive and thrive during humanitarian crises.</p>
              <InvestContact className="mt-3"/>
          </Container>
          
    </div>
  )
}

export default Contact
