import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-3 mb-3">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600 text-sm">
            Ціна: {item.price} ₴ × {item.quantity}
          </p>
          <p className="text-gray-800 font-medium">
            Разом: {item.price * item.quantity} ₴
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-red-600 hover:text-red-800 transition"
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;
