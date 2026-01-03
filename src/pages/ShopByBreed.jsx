import React from "react";
import "../styles/Breed.css";
import { products } from "../data";
import { Link } from "react-router-dom";

function ShopByBreed() {
  const breedProducts = products.filter(
    (product) => product.category === "breed"
  );

  return (
    <div className="breed-container">
      <h1 className="breed-header">Shop by Breeds You Prefer</h1>

      {breedProducts.map((breed) => (
        <div key={breed.id} className="breed-section">
          <img
            src={breed.breedImage}
            alt={breed.breedName}
            className="breed-img"
          />

          <div className="breed-info">
            <h2>{breed.breedName}</h2>
            <p>{breed.breedInfo}</p>

            <Link to={`/product/${breed.id}`}>
              <img
                src={breed.productImage}
                alt={`${breed.breedName} Product`}
                className="breed-product clickable"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopByBreed;
