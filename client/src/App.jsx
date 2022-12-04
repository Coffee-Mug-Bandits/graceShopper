import "./App.css";
import React from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import AuthForm from "./components/AuthForm";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App bg-indigo-500 h-100vh w-100vw">
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:method" element={<AuthForm />} />
      </Routes>
    </div>
  );
}

export default App;
