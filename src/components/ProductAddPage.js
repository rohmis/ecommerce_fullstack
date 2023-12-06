import React, { useState } from "react";
import { Card, Button, Col, Row, Form, Table } from "react-bootstrap";

const products1 = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$29.99",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$29.99",
  },

  // Add more items as needed
];

const SellerDashBoard = () => {
  // Data for the sidebar
  const [selectedItem, setSelectedItem] = useState(products1);

  // Function to handle sidebar item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Additional actions based on the selected item
  };

  // State to manage product form data
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    description: "",
    images: [],
    price: "",
  });

  // Handlers for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setProductData({
      ...productData,
      images: imageUrls,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data:", productData);
    // Code for submitting the product data (e.g., sending it to an API)
  };

  // Sample product data for the table
  const sampleProducts = [
    {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      price: "$50",
      imageUrl: "https://via.placeholder.com/150", // Example image URL
    },
    {
      id: 2,
      title: "Product 2",
      category: "Category 2",
      price: "$70",
      imageUrl: "https://via.placeholder.com/150", // Example image URL
    },
    {
      id: 3,
      title: "Product 3",
      category: "Category 1",
      price: "$60",
      imageUrl: "https://via.placeholder.com/150", // Example image URL
    },
    // Add more products as needed
  ];

  // State to manage the product data for the table
  const [products, setProducts] = useState(sampleProducts);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Dashboard</h1>
        <ul>
          <li onClick={() => handleItemClick("Item 1")}>Item 1</li>
          <li className="divider"></li>
          <li onClick={() => handleItemClick("Item 2")}>Item 2</li>
          <li className="divider"></li>
          <li onClick={() => handleItemClick("Item 3")}>Item 3</li>
          {/* Add more items as needed */}
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Cards based on the selected item */}
        <Row>
          {products1.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card className="card1">
                <Card.Body>
                  <Card.Text>{item.description}</Card.Text>
                  <div className="mt-2 py-3">
                    <strong>{item.price}</strong>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Product table */}
      <div
        className="product-table"
        style={{ padding: "50px", marginTop: "-70px" }}
      >
        <Row>
          <Col>
            <h1>Product Table</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <img
                        src={product.imageUrl}
                        alt={`Product ${product.id}`}
                        className="product-image"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>

      {/* Product add form */}
      <div className="product-add-page">
        <h1>Add Product</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={productData.title}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter description"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="images">
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              required
            />

            {/* Display image previews */}
            <div className="image-preview">
              {productData.images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="preview-image"
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SellerDashBoard;
