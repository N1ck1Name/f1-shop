import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/components/navbar.css";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/shop?search=${encodeURIComponent(trimmed)}`);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">F1Shop</Link>

        <form className="search" onSubmit={onSearchSubmit} role="search">
          <label htmlFor="site-search" className="sr-only">Пошук</label>
          <input
            id="site-search"
            placeholder="Пошук товарів..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-btn" aria-label="Шукати">
            <FaSearch />
          </button>
        </form>

        <div className="nav-menu">
          <NavLink to="/" end>Головна</NavLink>
          <NavLink to="/shop">Магазин</NavLink>
          <NavLink to="/contact">Контакти</NavLink>
          <NavLink to="/about">Про нас</NavLink>
          <NavLink to="/account">Мій акаунт</NavLink>
        </div>

        <button type="button" className="cart" onClick={goToCart} aria-label="Кошик">
          <FaShoppingCart />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
