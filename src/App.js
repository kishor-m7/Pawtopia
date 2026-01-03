import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CanineCart from "./pages/CanineCart";
import FelineFinds from "./pages/FelineFinds";
import Merchandise from "./pages/PetMerchandise";
import ShopByBreed from "./pages/ShopByBreed";
import ProductDetail from "./pages/ProductDetail";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canine-cart" element={<CanineCart />} />
        <Route path="/feline-finds" element={<FelineFinds />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/shop-by-breed" element={<ShopByBreed />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
