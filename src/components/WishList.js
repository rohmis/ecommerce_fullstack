import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const wishlistItems = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$19.99',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$29.99',
  },
  // Add more items as needed
];

export default function WishList() {
  const addToCart = (id) => {
    // Logic to add item to cart
    console.log(`Adding item with ID ${id} to cart`);
  };

  return (
    <>
    <Container style={{marginTop:'100px'}}>
      <Row>
        {wishlistItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card style={{width:'18rem'}}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Text>{item.description}</Card.Text>
                <div className="mt-2 py-3">
                  <strong>{item.price}</strong>
                </div>
                <Button onClick={() => addToCart(item.id)}>Add to Cart</Button>
                <Button onClick={() => addToCart(item.id)} title='Remove' style={{marginLeft:'30px'}}><i class="fa-solid fa-trash"></i></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}
