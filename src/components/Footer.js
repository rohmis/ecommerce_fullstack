import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='footer text-center text-white bg-dark'>
      <Container className='p-4'>
        <section className='mb-4'>
          <Button variant="outline-light" className='m-1' href='#!'>
            <FontAwesomeIcon icon={faFacebookF} />
          </Button>

          <Button variant="outline-light" className='m-1' href='#!'>
            <FontAwesomeIcon icon={faTwitter} />
          </Button>

          <Button variant="outline-light" className='m-1' href='#!'>
            <FontAwesomeIcon icon={faGoogle} />
          </Button>

          <Button variant="outline-light" className='m-1' href='#!'>
            <FontAwesomeIcon icon={faInstagram} />
          </Button>

          <Button variant="outline-light" className='m-1' href='#!'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Button>

          <Button variant="outline-light" className='m-1' href='#!'>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
        </section>

        <section className=''>
          <Row>
            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                {/* Repeat the list items as needed */}
              </ul>
            </Col>
            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                {/* Repeat the list items as needed */}
              </ul>
            </Col>
            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                {/* Repeat the list items as needed */}
              </ul>
            </Col>
            <Col lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
                {/* Repeat the list items as needed */}
              </ul>
            </Col>
            {/* Repeat the columns as needed */}
          </Row>
        </section>
      </Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
       Rohit mishra
        </a>
      </div>
    </footer>
  );
}
