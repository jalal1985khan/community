import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Team() {
  const teamMembers = [
    { name: 'Shiv kumar', role: 'Mentor', image: './images/shiv.png' },
    { name: 'Shaonli Chakraborty', role: 'Mentorr', image: '/images/sonali.png' },
    { name: 'Krishnamoorthy', role: 'Director', image: '/images/krishna.png' },
    { name: 'Raghunathan', role: 'Advisor', image: '/images/radhu.png' },
    { name: 'CP Chandrashekarappa', role: 'Director & Adviso', image: '/images/cp.png' },
    { name: 'Vishrut Shivkumar', role: 'Head of Operations', image: '/images/vishrut.png' },
    { name: 'Ambika Sasidharan', role: 'Marketing & Communications', image: '/images/ambika.png' },
    { name: 'Rakesh BH', role: 'Finance & Accounting', image: '/images/rakesh.png' },
    { name: 'Karabasappa', role: 'Finance & Accounting', image: '/images/karaba.png' },
    { name: 'Bhagyavathi', role: 'Carbon Sequestration Lead', image: '/images/Bhagyavathi.png' },
    // Add more team members as needed
  ];
  return (

       <Container className="mt-5">
        <h2 className="text-center mb-4"> 
          <span style={{ color: "#A6CE41" }}> Our</span> <span style={{ color: "#01a0e3" }}> Team</span>
          </h2>
      <Row xs={1} md={2} lg={4} className="g-3">
        {teamMembers.map((member, index) => (
          <Col key={index}>
            <Card className='team-card'>
              <Card.Img className='i-team' variant="top" src={member.image} alt={`${member.name} - ${member.role}`} />
              <Card.Body>
                <Card.Title className='n-team'>{member.name}</Card.Title>
                <Card.Text className='p-role'>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Team;