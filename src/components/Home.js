import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import ProductList from './ProductList';
// import './Home.css'; // Import the CSS file for additional styling


const Home = () => {
  return (
    <>    <Carousel data-bs-theme="dark" className='carousel'>
    <Carousel.Item className='carousel-item active'>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="First slide"
        style={{width:'100%'}}
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/11287048/pexels-photo-11287048.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Second slide"
        style={{width:'100%'}}
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel-item'>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Third slide"
        style={{width:'100%'}}
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   
<ProductList/>

  </>

  );
};

export default Home;
