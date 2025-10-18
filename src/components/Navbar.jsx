import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">F1 Shop</h1>
      <div className="space-x-4">
        <Link to="/">Головна</Link>
        <Link to="/shop">Магазин</Link>
        <Link to="/product">Продукт</Link>
        <Link to="/contact">Контакти</Link>
        <Link to="/about">Про нас</Link>
      </div>
    </nav>
  );
}

export default Navbar;
