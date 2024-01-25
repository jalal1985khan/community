"use client"

import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Image from 'next/image'


function Bodyaction()  {
  return (
     <>
         <Container  className='d-flex mt-5 mb-4'>
          <row className="d-flex flex-coulm">
            <Col lg={10}>
            <h2 className="t-vision">Our Approach</h2>
            <p className="p-vision">
            The COVID-19 pandemic has enabled the Catalyst Group to build a strong and dynamic pan-India multidisciplinary network with a variety of expertise. This presents the potential to build the resilience of the vulnerable and their institutions in their everyday emergencies and to be ready for future humanitarian crises (climate & health). This has led to the #COVIDActionCollab transitioning to Community Action Collab, a ‘spring to action’ ready humanitarian emergency platform.
            </p>
            <p className="p-vision">
            Our approach is born of the learning from #COVIDActionCollab is focused on orchestrating the responses of partners, solving difficult problems to find scalable solutions and influencing practice, policy and investments.
            </p>
            <p className="p-vision">
            We deploy a three-pronged approach to support and enable vulnerable communities to survive and thrive amidst a crisis.
            </p>
            </Col>
             
          </row>
      </Container>
      
      <Container fluid style={{     background: 'linear-gradient(90deg, #3690C0 0%, #3690C0 50%, #272727 50%)' }}>
        <Container>
          <Row>
            
            <Col  style={{ background: '#3690C0' }} >      
            <div class="card border-0 mt-5 mb-5 pt-5 pb-5" style={{ background: '#3690C0' }}>
  <Image src="/images/015-Build-Blockchain.svg" class="" alt="..." width={80} height={80} />
  <div class="card-body">
    <h5 class="card-title fs-2 text-white">Orchestratee</h5>
    <p class="card-text text-white">Functional governance systems that cause dynamic network effects, with nodes to actively address the needs of the vulnerable and enable human capital for emergency response.</p>
  </div>
</div>
            </Col>
            <Col className='triangle-right' lg={1}></Col>
            
            <Col style={{ background: '#FDD700' }}>
              
            <div class="card border-0 mt-5 mb-5 pt-5 pb-5" style={{ background: '#FDD700' }}>
  <Image src="/images/influencer.svg" class="" alt="..." width={80} height={80} />
  <div class="card-body">
    <h5 class="card-title fs-2">Influence</h5>
    <p class="card-text">Significant policy and practice changes. Amplify components/issues through global collaboration.</p>
  </div>
</div>

            </Col>
            <Col className='triangle-right-1' lg={1}></Col>
            <Col style={{ background: '#272727' }}>
              
            <div class="card border-0 mt-5 mb-5 pt-5 pb-5" style={{ background: '#272727' }}>
  <Image src="/images/business-and-finance.svg" class="" alt="..." width={80} height={80} />
  <div class="card-body">
    <h5 class="card-title fs-2 text-white">Solve</h5>
    <p class="card-text text-white">Scalable solutions, response time and district level integrated action.</p>
  </div>
</div>

            </Col>
        </Row>

        </Container>
        


</Container>




<Container>
  <Row>
    <Col>
            <p className="p-vision mt-3">
            The key elements we’re focusing on to operationalise this are:
            </p>
            <h2 className="t-vision">Outcomes</h2>
    </Col>
  </Row>
  <Row>
        <Col sm className='outcomebox  d-flex align-items-center'>
          <p className='p_outcomes'>
          Enable at least 10 million vulnerable people to experience resilience in their lives and livelihoods.
          </p>
        </Col>
        <Col  sm className='outcomebox d-flex align-items-center' >
          <p className='p_outcomes' >
          Enable at least 100 vulnerable people-focused organisations to become resilient to future humanitarian tragedies.
          </p>
        </Col>
        <Col sm className='outcomebox d-flex align-items-center'>
          <p className='p_outcomes'>
          Create a ‘spring to action’ ready resourced platform available to respond to emergencies present in key vulnerable districts.
          </p>
        </Col>
      </Row>
      <Row>
    <Col>
    <h2 className="t-vision">Focus and Scale</h2>
            <p className="p-vision">
            We place vulnerable people at the centre of the initiative. Its strategies and approach are geared towards attaining scale. Its action orientation is etched within what it will seek to do (orchestrate, solve and influence) and how (partner action platform, district-level initiatives and emergency response systems).
            </p>
            <h2 className="t-vision">Our Unique Approach</h2>
            <p className="p-vision">
            As an orchestrator, we will support the development of nodes of geographical, domain and vulnerable population profiles. Each node would be a cluster of partners, driven by an anchor partner. The node would identify and implement an agenda with respect to the resilience of vulnerable populations in their geographies, with respect to a domain or a vulnerability profile. Through the orchestration, the entire system of nodes will be supported to enable a network effect as a force multiplier. A technology backbone will enable optimal network engagements.
            </p>
            <h2 className="t-vision">Decentralisation and Localisation</h2>
            <p className="p-vision">
            An integrated district approach for resilience building and disaster preparation will be undertaken for districts selected based on vulnerability assessment and partner availability. This approach would include SDG planning at the district level, scaleable models and initiatives, as well as response plans with the government for disaster management. Localisation will also give a fillip to resilience, which will get comprehensively addressed through building individual as well as collective agency.
            </p>
            <h2 className="t-vision">Management Architecture</h2>
            <p className="p-vision">
            The backbone of the Community Action Collab is a Secretariat that will help in developing the collaborative platform, maintaining partner nodes, facilitating an impact canvas for problem-solving, designing resilience-building initiatives at the district level and performing other enabler functions for the collaborative like technology, communications, monitoring and evaluation, policy advocacy and governance.
            </p>
            
    </Col>
  </Row>
  
</Container>

     </>


  )

}
export default Bodyaction

