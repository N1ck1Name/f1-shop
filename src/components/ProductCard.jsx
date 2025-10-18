import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg mb-3 w-full object-cover"
        />
        <h3 className="font-bold text-lg hover:text-red-600">{product.name}</h3>
      </Link>
      <p className="text-gray-700 mb-2">{product.price} ₴</p>
      <button
        onClick={onAddToCart}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition"
      >
        Додати в кошик
      </button>
    </div>
  );
}

export default ProductCard;
