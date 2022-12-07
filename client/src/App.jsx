import "./App.css";
import React from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import AuthForm from "./components/AuthForm";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-full min-w-full">
      <div className="App bg-gradient-to-t from-yellow-600 to-yellow-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:method" element={<AuthForm />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
