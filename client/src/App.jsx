import "./App.css";
import React from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Orders from "./components/Orders";
import AuthForm from "./components/AuthForm";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/:method" element={<AuthForm />} />
      </Routes>
    </div>
  );
}

export default App;
