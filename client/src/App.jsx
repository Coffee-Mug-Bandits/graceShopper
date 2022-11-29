import { useState } from "react";
import "./App.css";
import React from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
