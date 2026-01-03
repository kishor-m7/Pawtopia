import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import "../styles/CanineCart.css";

const CanineCart = () => {
  const dogProducts = products.filter((product) =>
    product.id.includes("dogfood")
  );

  return (
    <div className="canine-cart-container">
      <h1 className="canine-cart-header">Canine Cart</h1>
      <div className="canine-product-grid">
        {dogProducts.map((product) => (
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

export default CanineCart;
