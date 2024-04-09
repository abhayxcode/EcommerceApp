import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
// import { ContextAPIProvider } from "./context/ContextAPI.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import data from "./data/Products.js";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
              padding: "10px 15px",
              fontSize: "18px",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:id"
            element={<ProductDetail productList={data} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
