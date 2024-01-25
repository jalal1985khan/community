"use client";
import React from "react";
import { Row, Col, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Image from "next/image";

function Banner() {
  return (
    <>
<Container className='banner-bg d-flex align-items-center' fluid style={{
  backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1c7c9c0d), url(/images/Join-Us-Banner-Comprossed.jpeg)'
}}>
        <Container style={{height:'500'}}>
        <Row className='' fluid>
          <Col lg={6} className='d-flex align-items-center'>
            <p className='fs-4 text-start'> If you are about empowering vulnerable communities to build
              resilience to bounce forward in any humanitarian crisis <b>Join us!</b></p>
          </Col>
          </Row>
          </Container>
        </Container>
      <Container fluid>
        <Row>
          <Col className="Partner-With-join" lg={6} style={{ backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1c7c9c0d), url(/images/DSC03582.png)'}}>


          </Col>
          <Col className="Partner-With-join-1" lg={6}>
            <h2 className="t-partner">Partner With Us</h2>
            <p className="p-partner pb-4 pt-4">We’re looking to partner with:</p>
            <ul className="list-unstyled list-partner">
              <li className="mb-4">
                <Image
                  src="/images/top-2.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                Implementing Organisations: NGOs, CBOs and Government bodies
                working at a grassroots level.
              </li>
              <li className="mb-4">
                <Image
                  src="/images/top-2.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                Providers: Organisations with resources such as HR, technology,
                materials, finance, etc.
              </li>
              <li className="mb-4">
                <Image
                  src="/images/top-2.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                Enablers: Industry Associations, Policy Think Tanks and
                Academia. Join our pan-India collaborative that contributes to
                building resilience among vulnerable communities.
              </li>
            </ul>
            <a href="" className="btn btn-partner">
              JOIN US
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="volunteer-1" lg={6}>
            <h2 className="t-volunteer">Volunteer With Us</h2>
            <p className="p-volunteer pt-4">
              We invite stellar, driven and passionate volunteers who’d like to
              contribute to <br />
              resilience building within vulnerable communities.
            </p>
            <p className="mail-us">
              WRITE TO US AT{" "}
              <a href="mailto:COMMUNITYACTIONCOLLAB@CATALYSTS.ORG"></a>
              COMMUNITYACTIONCOLLAB@CATALYSTS.ORG
            </p>
          </Col>
          <Col className="Partner-With-join" lg={6} style={{ backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1c7c9c0d), url(/images/DSC05396.png)'}}></Col>
        </Row>
        <Row>
        <Col className="Partner-With-join" lg={6} style={{ backgroundImage: 'linear-gradient(45deg, #1C7C9C, #1c7c9c0d), url(/images/DSC04543.png)'}}></Col>
          <Col className="Invest-1">
            <h2 className="t-partner">Invest In Community Action Collab</h2>
            <p className="p-partner">
            The CAC is not merely an aggregation of partners but an aggregation of capacities, through which we have developed key high-impact initiatives. We have drawn upon our experience of engagement with our large constituency of partners to put together a menu of initiatives for funders/investors to support that will save lives and livelihoods and enable vulnerable communities to ‘bounce forward’.
            </p>
            <a href="" className="btn btn-partner">
              FIND OUT MORE
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
