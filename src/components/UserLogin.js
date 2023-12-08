import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/api/sellers/')
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the seller with the entered email
    const loggedInSeller = apiData.find((data) => data.email === formData.email);
  
    if (loggedInSeller && loggedInSeller.password === formData.password) {
      // Valid credentials, perform login action
      console.log('Login successful');
      navigate('/SellerDashboard', { state: { sellerId: loggedInSeller.id } });
    } else {
      // Invalid credentials, show error message
      alert('Invalid email or password');
      console.log('Invalid email or password');
    }
  };
  
  return (
    <Container fluid>
      <Row className='justify-content-center align-items-center ' >
        <Col xs={12} md={6} style={{width:'40%'}}>
          <Card className='bg-dark text-white my-3 mx-auto rounded-3' >
            <Card.Body className='p-3 d-flex flex-column align-items-center'>
              <h2 className="fw-bold mb-4 text-uppercase">Login</h2>
              <p className="text-white-50 mb-4">Please enter your login and password!</p>
              
              <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group className='mb-4'>
          <Form.Label className='text-white'>Email address</Form.Label>
          <Form.Control
            type='email'
            size='lg'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label className='text-white'>Password</Form.Label>
          <Form.Control
            type='password'
            size='lg'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
                
                <div className="mb-4">
                  <p className="small mb-2 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                </div>
                <div style={{marginLeft:'40%'}}> 
                <Button variant='outline-light' className='px-4 mb-4' type='submit'>
          Login
        </Button>
                </div>
              </Form>
              
              <div className='d-flex justify-content-center mb-5'>
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
              
              <div style={{marginTop:'-10%'}}>
                <p className="mb-0">Don't have an account? <Link to="/UserRegistration">Sign Up</Link></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserLogin;

