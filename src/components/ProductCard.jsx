import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/productcard.css";

function ProductCard({ product, onAddToCart }) {
  const { id, image, name, category, price } = product;

  const format = (n) =>
    new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 2 }).format(n);

  const handleAdd = () => {
  if (onAddToCart) onAddToCart(product);
  };

  return (
    <div className="product-card" role="article" aria-label={name}>
      <Link to={`/product/${id}`} aria-label={`Переглянути ${name}`}>
        <div className="product-card_img">
          <img
            src={image}
            alt={name}
            loading="lazy"
            width={600}
            height={400}
            draggable="false"
            onError={(e) => { e.currentTarget.src = "/fallback-product.jpg"; }}
          />
        </div>

        <div className="product-card_body">
          <h3 className="product-card_title">{name}</h3>
          <p className="product-card_meta">{category}</p>
          <p className="product-card_price">{format(price)} ₴</p>
        </div>
      </Link>

      <div className="product-card_actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAdd}
          aria-label={`Додати ${name} в кошик`}
        >
          Додати в кошик
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
