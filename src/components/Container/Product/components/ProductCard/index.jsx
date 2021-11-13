import React from "react";
import { formatPrice } from "../../../../../utils/FormatPrice";
import { showRating } from "../../../../../utils/Rating";
import "./style.css";

ProductCard.propTypes = {};

function ProductCard(props) {
  const { product, onItemClick } = props;

  const handleItemClick = () => {
    if (onItemClick) onItemClick(product);
  };

  return (
    <a onClick={handleItemClick} className="home-product-item">
      <div
        className="home-product-item__img"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>

      <h4 className="home-product-item__name">{product.productName}</h4>

      <div className="home-product-item__price">
        {/* <span className="home-product-item__price-old">{pro.price}</span> */}
        <span className="home-product-item__price-current">
          {formatPrice(product.price)}đ
        </span>
      </div>

      {/* <div className="home-product-item__action">
        <div className="home-product-item__rating">
          {showRating(product.product.rating)}
        </div>
      </div> */}

      <div className="home-product-item__origin">
        <span className="home-product-item__origin-name">
          {product.description}
        </span>
      </div>

      <div className="home-product-item__favourite">
        <i className="fas fa-check"></i>
        <span>Yêu thích</span>
      </div>
    </a>
  );
}

export default ProductCard;
