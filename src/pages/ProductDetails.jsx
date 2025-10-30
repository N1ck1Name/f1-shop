import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import "../styles/pages/productdetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="product-notfound">Товар не знайдено 😕</h2>;
  }

  return (
    <main className="product-details">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">Ціна: {product.price} ₴</p>

          {product.colors && (
            <div className="colors">
              <p className="label">Доступні кольори:</p>
              <div className="color-list">
                {product.colors.map((color, i) => (
                  <span
                    key={i}
                    style={{ backgroundColor: color }}
                    className="color-dot"
                  ></span>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="sizes">
              <p className="label">Розміри:</p>
              <div className="size-list">
                {product.sizes.map((size, i) => (
                  <span key={i} className="size-item">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Додати в кошик
          </button>
        </div>
      </div>

      {product.comments && (
        <div className="comments">
          <h3>💬 Коментарі</h3>
          <ul>
            {product.comments.map((c, i) => (
              <li key={i}>
                <strong>{c.user}:</strong> {c.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default ProductDetails;
