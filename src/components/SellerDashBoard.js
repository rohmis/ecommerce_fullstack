import React, { useState ,useEffect} from "react";
import { Card, Button, Col, Row, Form, Table } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const products1 = [
  {
    id: 1,
    title:'Total Revenue',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99",
  },
  {
    id: 2,
    title:'New Customers',
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$29.99",
  },
  {
    id: 2,
    title:'New Orders',
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$29.99",
  },
  {
    id: 2,
    title:'New Orders',
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$29.99",
  },
  {
    id: 2,
    title:'New Orders',
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$29.99",
  },
{
    id: 2,
    title:'New Orders',
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "$29.99",
  },

  // Add more items as needed
];





const SellerDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();
  const sellerId = location.state && location.state.sellerId;
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    if (sellerId) {
      // Fetch data for the specific seller using the sellerId
      console.log(sellerId)
      axios.get(`http://127.0.0.1:8000/api/products/`)
        .then((response) => {
          // Handle fetched data for the specific seller
          console.log(response.data);
          const sellerProducts = response.data.filter(product => product.seller === sellerId);
          console.log(sellerProducts)
          setSelectedItem(sellerProducts)
          // Set state or perform actions with the seller data
        })
        .catch((error) => {
          console.error('Error fetching seller data: ', error);
        });
    }
  }, [sellerId]);

  // if (sellerId == selectedItem[0].id){
  //   console.log(selectedItem)
  // }

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    description: "",
    images: [],
    price: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Use FileReader to read and store image URLs for preview
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setProductData({
      ...productData,
      images: imageUrls, // Store image URLs in the state for preview
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic using productData state
    console.log("Product data:", productData);
    // You can send this data to an API or perform any other action
  };
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
  const [products, setProducts] = useState(sampleProducts);

  const renderContent = () => {
    switch (selectedOption) {
      case "Item 1":
        return (
          <div className="main-content">
            <Row>
              {products1.map((item) => (
                <Col key={item.id} md={4} className="mb-4">
                  <Card className="card1">
                    <Card.Title>{item.title}</Card.Title>
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
        );
      case "Item 2":
        return (
          <div className="product-table" style={{ padding: "50px", marginTop: "-50px",width:'900px',marginLeft:'50px' }}>
            <Row>
              <Col>
                <h1>Listed Product</h1>
                <Table striped bordered hover style={{padding:'10px'}}>
                  {/* Table content */}
                  <thead >
                    <tr>
                      <th  style={{backgroundColor:'black',color:'white'}}>ID</th>
                      <th style={{backgroundColor:'black',color:'white'}}>Name</th>
                      <th style={{backgroundColor:'black',color:'white'}}>Description</th>
                      <th style={{backgroundColor:'black',color:'white'}}>Price</th>
                      <th  style={{backgroundColor:'black',color:'white'}}>Image</th> {/* New column for image */}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItem.map((product) => (
                      <tr key={product.id} style={{height:'50px'}}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                          <img
                            src="https://via.placeholder.com/150"
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
        );
      case "Item 3":
        return (
          <div className="product-add-page" style={{marginLeft:'30px'}}>
            <h1>Add Product</h1>
            <Form onSubmit={handleSubmit} style={{width:'700px'}}>
              {/* Form content */}
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
        );
      default:
        return <div className="animie">
 <div className="cat">
  <div className="ear ear--left"></div>
  <div className="ear ear--right"></div>
  <div className="face">
    <div className="eye eye--left">
      <div className="eye-pupil"></div>
    </div>
    <div className="eye eye--right">
      <div className="eye-pupil"></div>
    </div>
    <div className="muzzle"></div>
  </div>
</div>


      </div>
    }
  };

  // Rest of the code remains the same
  
  return (
    <>
      <div className="dashboard-container" >
        <div className="sidebar">
          <h1>Dashboard</h1>
          <ul>
            <li onClick={() => handleItemClick("Item 1")}>Analytics</li>
            <li onClick={() => handleItemClick("Item 2")}>Show products</li>
            <li onClick={() => handleItemClick("Item 3")}>Add products</li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <Row>
          {renderContent()}
        </Row>
      </div>
    </>
  );
};

export default SellerDashboard;
