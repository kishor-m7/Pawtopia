import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found.</p>;

  const handleOrder = () => {
    navigate("/order-success");
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <h2>{product.name || product.breedName}</h2>
        <img
          src={product.image || product.productImage}
          alt={product.name || product.breedName}
          className="product-details-img"
        />
        {product.price && (
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
        )}
        {
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>
        }
        <p className="des">{product.description || product.breedInfo}</p>
        <button onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default ProductDetails;
