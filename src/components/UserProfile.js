import React from 'react';
import { Container, Row, Col, Card, Image,Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function UserProfile() {
  return (
    <section className="userprofile">
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="8" className="mb-4 mb-lg-0">
            <Card className="userCard" style={{ width:'100%' }}>
              <Row className="g-0">
                <Col md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <h5>Marie Horwitz</h5>
                  <p>Web Designer</p>
                  <FontAwesomeIcon icon={faEdit} className="mb-5" />
                </Col>
                <Col md="8">
                  <Card.Body className="p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col size="6" className="mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">info@example.com</p>
                      </Col>
                      <Col size="6" className="mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">123 456 789</p>
                      </Col>
                    </Row>

                    <h6>Social Media</h6>
                    <hr className="mt-0 mb-4" />
                    <Row className="pt-1">
                      <Col size="6" className="mb-3">
                        <h6>Facebook</h6>
                        <p className="text-muted">facebook.com/user</p>
                      </Col>
                      <Col size="6" className="mb-3">
                        <h6>Twitter</h6>
                        <p className="text-muted">twitter.com/user</p>
                      </Col>
                    </Row>

                    <div className="d-flex justify-content-start">
                    <Button variant='none' className='m-3' style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </Button>
                <Button variant='none' className='m-3' style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </Button>
                <Button variant='none' className='m-3' style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={faGoogle} size="lg" />
                </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
