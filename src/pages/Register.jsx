import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/pages/auth.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    register(form);
    navigate("/account");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Реєстрація</h2>
        <p>Створи акаунт, щоб зберігати покупки</p>
        <form onSubmit={onSubmit} className="auth-form">
          <label>
            Імʼя
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </label>
          <button type="submit" className="auth-btn">Створити акаунт</button>
        </form>
      </div>
    </main>
  );
}

export default Register;
