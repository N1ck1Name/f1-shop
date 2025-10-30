import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles/pages/cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart, cartTotal } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    comment: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  const total = cartTotal ?? cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // тут ти можеш відправити на бекенд
    console.log("ORDER:", {
      customer: form,
      items: cart,
      total,
    });
    setOrderSuccess(true);
    clearCart();
    setForm({ name: "", phone: "", city: "", comment: "" });
  };

  return (
    <main className="cart-page">
      <div className="container cart-layout">
        <div>
          <h2 className="page-title">🛒 Кошик</h2>

          {cart.length === 0 ? (
            <div className="cart-empty">Кошик порожній 😅</div>
          ) : (
            <div className="cart-list">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} onRemove={removeFromCart} />
              ))}
            </div>
          )}
        </div>

        {/* Блок оформлення */}
        <aside className="checkout">
          <h3>Оформлення замовлення</h3>

          {orderSuccess ? (
            <p className="success-msg">
              ✅ Дякуємо! Ми отримали твоє замовлення.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="checkout-form">
              <label>
                Ім’я та прізвище
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </label>
              <label>
                Телефон
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+380..."
                  required
                />
              </label>
              <label>
                Місто / Відділення
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Київ, НП №12"
                  required
                />
              </label>
              <label>
                Коментар
                <textarea
                  rows="3"
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Наприклад: передзвоніть перед відправкою"
                ></textarea>
              </label>

              <div className="checkout-total">
                <span>Сума до оплати:</span>
                <strong>{total} ₴</strong>
              </div>

              <button type="submit" className="checkout-btn" disabled={cart.length === 0}>
                Підтвердити замовлення
              </button>
            </form>
          )}
        </aside>
      </div>
    </main>
  );
}

export default Cart;
