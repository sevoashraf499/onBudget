import React from "react";
import "./styles/Recommendations.css";
import { categories } from "../../helpers/getCategories";

export default function Recommendation_1() {
  const userName = "Mario";

  return (
    <>
      <div className="rec-1">
        <h3>
          Hello, {userName}
          <span role="img" aria-label="emoji">
            😁
          </span>
        </h3>

        <h1>What are you looking for today?</h1>

        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.img} alt="category" />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
