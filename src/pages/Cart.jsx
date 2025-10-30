import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles/pages/cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="cart-page">
      <div className="container">
        <h2 className="page-title">🛒 Кошик</h2>

        {cart.length === 0 ? (
          <div className="cart-empty">Кошик порожній 😅</div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeFromCart} />
              ))}
            </div>

            <div className="cart-summary">
              <h3>Загалом: {total} ₴</h3>
              <button onClick={clearCart} className="clear-btn">
                Очистити кошик
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
