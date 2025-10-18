import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Кошик</h2>

      {cart.length === 0 ? (
        <p>Кошик порожній 😅</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h3 className="font-bold text-xl">Загалом: {total} ₴</h3>
            <button
              onClick={clearCart}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Очистити кошик
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
