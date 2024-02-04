import React from "react";
import "./styles/Recommendations.css";
import { products } from "../../helpers/getProducts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Recommendation_2() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
      deviceType: "desktop",
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
      deviceType: "tablet",
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      deviceType: "mobile",
    },
  };

  return (
    <>
      <div className="rec-2">
        <h1>Recommended Items</h1>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={responsive.deviceType}
          dotListClass="custom-dot-list-style"
          //   itemClass="carousel-item-padding-40-px"
        >
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt="product image" />
              <span className="name">{product.name}</span>
              <span className="price">{product.price}$</span>
              {product.inStock === true ? (
                <span className="inStock">In stock</span>
              ) : (
                <span className="outOfStock">Out of stock</span>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
