import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes, Link } from "react-router-dom";
import SellerLogin from "./components/SellerLogin";
import SellerRegister from "./components/SellerRegister";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import UserProfile from "./components/UserProfile";
import ProductDetail from "./components/ProductDetail";
import SellerDashBoard from "./components/SellerDashBoard";
import ProductAddPage from "./components/ProductAddPage";
import Sellers from "./components/Sellers";

function App() {
  return (
    <>
      <div >
        <NavBar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SellerLogin" element={<SellerLogin />} />
          <Route path="/SellerRegister" element={<SellerRegister />} />
          <Route path="/ProductList" element={<ProductList/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Wishlist" element={<WishList/>}/>
          <Route path="/UserProfile" element={<UserProfile/>}/>
          <Route path="/ProductDetail" element={<ProductDetail/>}/>
          <Route path="/SellerDashBoard" element={<SellerDashBoard/>}/>
          <Route path="/Sellers" element={<Sellers/>}/>
          
        </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;



