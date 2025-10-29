import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "../styles/components/navbar.css";

function Navbar() {
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // TODO: зчитати значення поля та виконати пошук
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">F1Shop</Link>

        <form className="search" onSubmit={onSearchSubmit} role="search" aria-label="Пошук товарів">
          <label htmlFor="site-search" className="sr-only">Пошук</label>
          <input id="site-search" placeholder="Пошук товарів..." />
          <button type="submit" className="search-btn" aria-label="Шукати">
            <FaSearch />
          </button>
        </form>

        <div className="nav-menu">
          <NavLink to="/" end>Головна</NavLink>
          <NavLink to="/shop">Магазин</NavLink>
          <NavLink to="/contact">Контакти</NavLink>
          <NavLink to="/about">Про нас</NavLink>
        </div>

        <button className="cart" aria-label="Кошик">
          <FaShoppingCart />
          <span className="badge">2</span>
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
