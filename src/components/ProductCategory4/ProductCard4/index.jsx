import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../utils/FormatPrice';
import { toSlug } from '../../../utils/ToSlug';

function ProductCard4(props) {

    const { product } = props;

    const slug = toSlug(product.productName)

    return (
        <Link
            to={`/product/${slug}`}
            className="home-product-item">
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
        </Link>
    );
}

export default ProductCard4;