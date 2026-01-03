import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import "../styles/PetMerchandise.css";

const PetMerchandise = () => {
  const merchProducts = products.filter((product) =>
    product.id.includes("merch")
  );

  return (
    <div className="merchandise-container">
      <h1 className="merchandise-header"> Pet Merchandise</h1>
      <div className="merch-grid">
        {merchProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-link"
          >
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PetMerchandise;
