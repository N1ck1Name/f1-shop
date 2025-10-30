import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import "../styles/pages/account.css";

function Account() {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  if (!user) {
    return (
      <main className="account-page">
        <div className="container">
          <h2>Ти не авторизований</h2>
          <p>Зареєструйся або увійди, щоб бачити збережені дані.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="account-page">
      <div className="container">
        <div className="account-header">
          <h2>Привіт, {user.name} 👋</h2>
          <button onClick={logout} className="logout-btn">Вийти</button>
        </div>

        <section className="account-block">
          <h3>Мій профіль</h3>
          <p><strong>Email:</strong> {user.email}</p>
        </section>

        <section className="account-block">
          <h3>Історія покупок (демо)</h3>
          {cart.length === 0 ? (
            <p>Поки що немає замовлень.</p>
          ) : (
            <ul className="orders">
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} — {item.quantity} шт. — {item.price * item.quantity} ₴
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default Account;
