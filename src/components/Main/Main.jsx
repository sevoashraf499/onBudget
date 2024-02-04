import React from "react";
import "./styles/Main.css";
import { products } from "../../helpers/getProducts";

export default function Main() {
  return (
    <>
      <main>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt="product image" />
            <span className="name">{product.name}</span>
            <p>{product.description}</p>
            <span className="price">Price: {product.price}</span>
            {product.inStock === true ? (
              <span className="inStock">In stock</span>
            ) : (
              <span className="outOfStock">Out of stock</span>
            )}
          </div>
        ))}
      </main>
    </>
  );
}
