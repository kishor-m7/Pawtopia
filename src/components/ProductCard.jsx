

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css"; 

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img
        src={product.image || product.productImage}
        alt={product.name || product.breedName}
        className="product-card-img"
      />
      <h3>{product.name || product.breedName}</h3>
      {product.price && <p>₹{product.price}</p>}
      <p>{product.description || product.breedInfo}</p>
    </div>
  );
}

export default ProductCard;
