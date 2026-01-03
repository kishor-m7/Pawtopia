import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import "../styles/FelineFinds.css";

const FelineFinds = () => {
  const catProducts = products.filter((product) =>
    product.id.includes("catfood")
  );

  return (
    <div className="feline-finds-container">
      <h1 className="feline-finds-header">Feline Finds</h1>
      <div className="feline-product-grid">
        {catProducts.map((product) => (
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

export default FelineFinds;
