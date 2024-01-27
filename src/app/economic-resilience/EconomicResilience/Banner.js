"use client";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

function Banner() {
  return (
    <>
      <Container className="economic-banner-bg" fluid>
        <Row className="economic-banner-bg-1" fluid>
          <Col lg={6} className="d-flex align-items-center ps-5">
            <h3 className="h2-economic">
              <span className="left-arrow "></span> Building the{" "}
              <span style={{ color: "#fde579" }}> Economic Resilience</span> of
              Vulnerable Communities<span className="right-arrow "></span>
            </h3>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
