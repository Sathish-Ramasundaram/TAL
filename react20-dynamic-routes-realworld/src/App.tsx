import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍 Real World Example</h1>

      <nav>
        <Link to="/products">Products</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
