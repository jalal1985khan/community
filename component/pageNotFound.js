import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import Seo from '../component/Seo'

const title= '404 - page not found'
  const description = '404 - page not found'
  const url = 'https://communityactioncollab.org/'
  const banner ="/images/Highcompressed_712800817.png"

function pageNotFound() {
  return (
      <>
          <Seo title={title} description={description} path={url} metaImage={banner} />
          <Header />
          <Container className='my-5'>
              <Row>
                  <Col className='text-center'>
                  <h1 style={{fontSize:'12em',fontWeight:'900'}}>404</h1>
                      <p className='fs-1'>Page not found</p>
                  <p className='fs-5'>Sorry we couldn't find this page. But don't worry.you can find plenty of other things on our <Link href="/">homepage</Link></p>
                  </Col>
              </Row>
          </Container>
          <Footer/>
      
      </>
  )
}

export default pageNotFound
