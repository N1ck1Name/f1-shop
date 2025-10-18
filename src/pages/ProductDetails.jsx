import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Знаходимо потрібний товар за id
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-10 text-xl">Товар не знайдено 😕</h2>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="font-semibold text-lg mb-2">Ціна: {product.price} ₴</p>

          {product.colors && (
            <div className="mb-3">
              <p className="font-semibold">Доступні кольори:</p>
              <div className="flex space-x-2 mt-1">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: color }}
                    className="w-6 h-6 rounded-full border border-gray-400"
                  ></div>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mb-3">
              <p className="font-semibold">Розміри:</p>
              <div className="flex space-x-2 mt-1">
                {product.sizes.map((size, i) => (
                  <span
                    key={i}
                    className="border border-gray-400 rounded-lg px-2 py-1 text-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg mt-4"
          >
            Додати в кошик
          </button>
        </div>
      </div>

      {product.comments && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">💬 Коментарі</h3>
          <ul className="space-y-2">
            {product.comments.map((c, i) => (
              <li
                key={i}
                className="border border-gray-200 rounded-lg p-2 bg-gray-50"
              >
                <strong>{c.user}:</strong> {c.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
