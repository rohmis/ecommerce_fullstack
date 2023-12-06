import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  InputGroup,
  Row,
  ListGroup,
  Form,
  Stack,
} from "react-bootstrap";

export default function Cart() {
  return (
    <section className="h-100 gradient-custom">
      <Container className="py-5 h-100">
        <Row className="justify-content-center my-4">
          <Col md="8">
            <Card className="mb-4">
              <Card.Header className="py-3">
                <h5 className="mb-0">Cart - 2 items</h5>
              </Card.Header>
              <Card.Header className="py-3">
                <Stack direction="horizontal">
                  <h5 className="mb-0" style={{ marginLeft: "10px" }}>
                    Products
                  </h5>
                  <h5 className="mb-0" style={{ marginLeft: "150px" }}>
                    description
                  </h5>
                  <h5 className="mb-0" style={{ marginLeft: "15%" }}>
                    Quantity
                  </h5>
                  <h5 className="mb-0" style={{ marginLeft: "12%" }}>
                    Price
                  </h5>
                </Stack>
              </Card.Header>

              {/* Card Body */}
              <Card.Body>
                {/* First Item */}
                <Row>
                  <Col lg="3" className="mb-4 mb-lg-0">
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="w-100"
                    />
                    {/* ... */}
                  </Col>
                  <Col lg="3" className="mb-4 mb-lg-0"  style={{ textAlign:'center' ,marginLeft:'20px' }}>
                    <Row>
                    <p >Roadster t-shirtadsfgghhhhhhhhhhhhhhhhhh</p>
                    </Row>
                    <Row style={{ marginTop:'50px'}}>
                    <div className="d-flex mb-4" style={{ maxWidth: "200px" }}>
                     
                    <i class="fa-solid fa-trash" style={{ fontSize: "30px" }}></i>
                    <i
                    className="fa-solid fa-heart"
                    style={{ fontSize: "30px" ,marginLeft:'20px'}}
                  ></i>
                
                    </div>
                    </Row>
                    {/* ... */}
                  </Col>

                  <Col lg="3" className="mb-4 mb-lg-0"  style={{ textAlign:'center' ,marginLeft:'30px' }}>
                    <div className="d-flex mb-4">
                      <Button
                        className="px-3 me-2"
                        size="sm"
                        //   onClick={() => handleDecrement(item.id)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </Button>
                      <InputGroup>
                        <Form.Control
                          defaultValue={0}
                          type="number"
                          min={0}
                          label="Quantity"
                        />
                      </InputGroup>
                      <Button
                        className="px-3 ms-2"
                        size="sm"
                        //   onClick={() => handleIncrement(item.id)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </Button>
                    </div>
                    
                  </Col>
                  <Col lg="3" className="mb-4 mb-lg-0"  style={{ textAlign:'center' ,marginLeft:'-50px' }}>
                    <p className="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                  </Col>
                </Row>
                <hr className="my-4" />

                <Row>
                  <Col lg="3" className="mb-4 mb-lg-0">
                    <Image
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="w-100"
                    />
                    {/* ... */}
                  </Col>
                  <Col lg="3" className="mb-4 mb-lg-0"  style={{ textAlign:'center' ,marginLeft:'20px' }}>
                    <Row>
                    <p >Roadster t-shirtadsfgghhhhhhhhhhhhhhhhhh</p>
                    </Row>
                    <Row style={{ marginTop:'50px'}}>
                    <div className="d-flex mb-4" style={{ maxWidth: "200px" }}>
                     
                    <i class="fa-solid fa-trash" style={{ fontSize: "30px" }}></i>
                    <i
                    className="fa-solid fa-heart"
                    style={{ fontSize: "30px" ,marginLeft:'20px'}}
                  ></i>
                
                    </div>
                    </Row>
                    {/* ... */}
                  </Col>

                  <Col lg="3" className="mb-4 mb-lg-0"  style={{ textAlign:'center' ,marginLeft:'30px' }}>
                    <div className="d-flex mb-4">
                      <Button
                        className="px-3 me-2"
                        size="sm"
                        //   onClick={() => handleDecrement(item.id)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </Button>
                      <InputGroup>
                        <Form.Control
                          defaultValue={0}
                          type="number"
                          min={0}
                          label="Quantity"
                        />
                      </InputGroup>
                      <Button
                        className="px-3 ms-2"
                        size="sm"
                        //   onClick={() => handleIncrement(item.id)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </Button>
                    </div>
                    
                  </Col>
                  <Col lg="3" className="mb-4 mb-lg-0"  style={{ textAlign:'center' ,marginLeft:'-50px' }}>
                    <p className="text-start text-md-center">
                      <strong>$17.99</strong>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            {/* Other Cards */}
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Summary</h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>&#8377; </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>&#8377;</strong>
                    </span>
                  </ListGroup.Item>
                </ListGroup>
                <Button block="true" size="lg">
                  Go to checkout
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <p>
                  <strong>We accept</strong>
                </p>
                <Row>
                  <Col className="me-2">
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                  </Col>
                  <Col className="me-2">
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                  </Col>
                  <Col className="me-2">
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                  </Col>
                  <Col>
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Summary */}
        </Row>
      </Container>
    </section>
  );
}
