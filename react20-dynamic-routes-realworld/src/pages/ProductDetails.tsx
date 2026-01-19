import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  // Find product that matches URL id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>❌ Product not found</h2>;
  }

  return (
    <div>
      <h2>📦 Product Details</h2>

      <p><strong>Name:</strong> 
      <span style={{ fontSize: "25px", fontWeight: "bold" }}>    
        {product.name}
      </span>
      </p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default ProductDetails;