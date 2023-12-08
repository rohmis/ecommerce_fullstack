import React, { useState } from "react";
import {
  Badge,
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBar = () => {
    setShowSearchBar(true);
  };

  return (
    <div>
      <Navbar expand="sm" fixed="top" className="Navbar">
        <Container fluid>
          <Navbar.Brand href="#" style={{ marginLeft: "3%" }}>
            Ecommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", marginLeft: "3%" }}
              navbarScroll
            >
              {/* ...Other links... */}
              <Link className="link1 me-3" to="/">
                Home
              </Link>
              <Link className="link1 me-3" to="/UserRegistration">
                Register
              </Link>
              <Link className="link1 me-3" to="/UserLogin">
                Login
              </Link>
              <Link className="link1 me-3" to="/ProductList">
                Products
              </Link>
              {/* <Link className="link1 me-3" to="/ProductDetail">
                Product Detail
              </Link> */}

              {showSearchBar && (
                <div  style={{ width:"500px",marginLeft:'100px' }}>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                     <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ fontSize: "25px", color: "green",marginTop:'7px',marginLeft:'-40px' }}
                    // onClick={searchBar}
                  ></i>
                </Form>
                </div>
              )}
            </Nav>
            <div style={{ marginRight: "0px" }}>
              <Stack direction="horizontal" gap={2}>
                {!showSearchBar && (
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ fontSize: "30px", color: "white" }}
                    onClick={searchBar}
                  ></i>
                )}
                {/* Heart and Cart icons */}
                <Link className="link1 me-3" to="/WishList">
                  <i
                    className="fa-solid fa-heart"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <Badge style={{width:'20px',marginLeft:'-12px',borderRadius:'50%'}} bg="dark">1</Badge>
                </Link>
                <Link className="link1 me-3" to="/Cart">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ fontSize: "30px", color: "brown" }}
                  ></i>
                  <Badge style={{width:'20px',marginLeft:'-12px',borderRadius:'50%'}} bg="dark">1</Badge>
                </Link>

                {/* User dropdown */}
                <NavDropdown
                  className="profile"
                  title={
                    <i
                      className="fa-solid fa-user"
                      style={{ fontSize: "30px", color: "black" }}
                    />
                  }
                  id="navbarScrollingDropdown"
                  align="end"
                >
                  <NavDropdown.Item>
                    {" "}
                    <Link className="link1 me-3" to="/UserProfile">
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link1 me-3" to="/SellerLogin">
                      Orders & History
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link1 me-3" to="/SellerDashBoard">
                      Seller
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="link1 me-3" to="/Sellers">
                      Sellers
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link className="link1 me-3" to="/SellerLogin">
                      Sign Out
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Stack>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
