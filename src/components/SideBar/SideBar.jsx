import React from "react";
import "./styles/SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <aside>
        <div className="shop-by-department">
          <h2>Shop by department</h2>

          <ul className="categories">
            <li>
              <Link to="../other">Women's Clothing & Accessories</Link>
            </li>
            <li>
              <Link to="../other">Men's Clothing & Accessories</Link>
            </li>
            <li>
              <Link to="../other">Bags, Shoes & Jewelry</Link>
            </li>
            <li>
              <Link to="../other">Electronics & Computers</Link>
            </li>
            <li>
              <Link to="../other">Home & Kitchen Appliances</Link>
            </li>
            <li>
              <Link to="../other">Beauty Products & Personal Care</Link>
            </li>
          </ul>
        </div>

        <div className="features-container">
          <h2>Features</h2>
          <ul className="features-list">
            <li>
              <Link to="/imagine">draw your imagination</Link>
            </li>
            <li>
              <Link to="/imagine">draw your imagination</Link>
            </li>
            <li>
              <Link to="/imagine">draw your imagination</Link>
            </li>
            <li>
              <Link to="/imagine">draw your imagination</Link>
            </li>
            <li>
              <Link to="/imagine">draw your imagination</Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
