import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-gray-800 font-semibold">${product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Додати в кошик
      </button>
    </div>
  );
};

export default ProductCard;
