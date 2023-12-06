import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { 
  setUsername,
  setCompanyname,
  setAddress,
  setPincode,
  setContactnumber,
  setWebsite,
  setEmail,
  setPassword,
  registerUser
} from "../redux/registrationSlice";
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const SellerRegister = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    user_name: "",
    company_name: "",
    address: "",
    pincode: "",
    contact_number: "",
    website: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    switch (name) {
      case "user_name":
        dispatch(setUsername(value));
        break;
      case "company_name":
        dispatch(setCompanyname(value));
        break;
      case "address":
        dispatch(setAddress(value));
        break;
      case "pincode":
        dispatch(setPincode(value));
        break;
      case "contact_number":
        dispatch(setContactnumber(value));
        break;
      case "website":
        dispatch(setWebsite(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "password":
        dispatch(setPassword(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      formData.user_name.trim() === "" ||
      formData.company_name.trim() === "" ||
      formData.address.trim() === "" ||
      formData.pincode.trim() === "" ||
      formData.contact_number.trim() === "" ||
      formData.website.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      alert("Please fill in all fields.");
    } else {
      dispatch(registerUser(formData));
    }
  };

  return (
    <Card style={{ width: '1000px', margin: 'auto', marginTop: '70px', padding:'10px',backgroundColor:'black',color:'white' }}>
      
      <Card.Body>
        <Card.Title style={{textAlign:'center',fontSize:'50px'}}>Register</Card.Title>
        <Form onSubmit={handleSubmit}>
        <Row >
        <Col xs={12} md={6}>
          <Form.Group style={{marginTop:'10px'}} controlId="formUserName">
            <Form.Label >Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Other form groups go here similarly */}
          {/* For instance, company name */}
          <Form.Group style={{marginTop:'10px'}} controlId="formCompanyName">
            <Form.Label >Company Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formAddress" style={{marginTop:'10px'}}>
            <Form.Label>Address:</Form.Label>
            <Form.Control
            as="textarea" rows={3}
             
              placeholder="Enter address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPincode" style={{marginTop:'10px'}}>
            <Form.Label>Pincode:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

          </Form.Group>
          </Col>
          <Col xs={12} md={6}>
          <Form.Group controlId="formContactnumber" style={{marginTop:'10px'}}>
            <Form.Label>Contact_number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact_number"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formWebsite"style={{marginTop:'10px'}}>
            <Form.Label>Website:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail" style={{marginTop:'10px'}}>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>


          <Form.Group controlId="formPassword" style={{marginTop:'10px'}}>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          </Col>
          {/* Add other form groups for address, pincode, contact_number, website, email, and password */}

          <Button variant="primary" type="submit" style={{width:'10%',marginTop:'20px',marginLeft:'20px'}}>
            Register
          </Button>
          </Row>
        </Form>

        <div style={{marginTop:'20px', textAlign:'center'}} >
                <p className="mb-0">Already have an account? <Link to="/SellerLogin">Sign In</Link></p>
              </div>
      </Card.Body>
     
    </Card>
  );
};

export default SellerRegister;


// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Button, Card } from 'react-bootstrap';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     user_name: "",
//     company_name: "",
//     address: "",
//     pincode: "",
//     contact_number: "",
//     website: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (
//       formData.user_name.trim() === "" ||
//       formData.company_name.trim() === "" ||
//       formData.address.trim() === "" ||
//       formData.pincode.trim() === "" ||
//       formData.contact_number.trim() === "" ||
//       formData.website.trim() === "" ||
//       formData.email.trim() === "" ||
//       formData.password.trim() === ""
//     ) {
//       alert("Please fill in all fields.");
//     } else {
//       try {
//         const response = await axios.post(
//           "http://127.0.0.1:8000/api/sellers/",
//           formData
//         );
//         console.log("Response:", response.data);
//         // Handle success or any further action
//       } catch (error) {
//         console.error("Error:", error.response.data);
//         // Handle error
//       }
//     }
//   };

//   return (
//     <Card style={{ width: '30rem', margin: 'auto', marginTop: '50px' }}>
//       <Card.Body>
//         <Card.Title>Register</Card.Title>
//         <Form onSubmit={handleSubmit}>
//           {/* ...Form fields */}
//           <Form.Group controlId="formUserName">
//             <Form.Label>Name:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               name="user_name"
//               value={formData.user_name}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           {/* Other form groups go here similarly */}
//           {/* For instance, company name */}
//           <Form.Group controlId="formCompanyName">
//             <Form.Label>Company Name:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter company name"
//               name="company_name"
//               value={formData.company_name}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="formAddress">
//             <Form.Label>Address:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="formPincode">
//             <Form.Label>Pincode:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Pincode"
//               name="pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="formContactnumber">
//             <Form.Label>Contact_number:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter contact_number"
//               name="contact_number"
//               value={formData.contact_number}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="formWebsite">
//             <Form.Label>Website:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter website"
//               name="website"
//               value={formData.website}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email:</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </Form.Group>


//           <Form.Group controlId="formPassword">
//             <Form.Label>Password:</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Register
//           </Button>
//         </Form>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Register;
