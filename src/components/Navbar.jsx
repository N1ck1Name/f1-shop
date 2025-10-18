import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";


function Navbar() {
  return (
    <nav className="bg-red-600 text-white py-3 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-3">
        {/* Логотип */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          F1<span className="text-yellow-300">Shop</span>
        </Link>

        {/* Пошук */}
        <div className="flex items-center bg-white rounded-lg overflow-hidden w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Пошук товарів..."
            className="flex-1 px-3 py-2 text-black outline-none"
          />
          <button className="bg-yellow-400 text-black px-3 py-2">
            <FaSearch />
          </button>
        </div>

        {/* Кнопка кошика */}
        <Link
          to="/cart"
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-2 rounded-lg transition"
        >
          <FaShoppingCart />
          <span>Кошик</span>
        </Link>
      </div>

      {/* Нижнє меню */}
      <div className="bg-red-700 py-2 mt-2 text-center space-x-6">
        <Link to="/" className="hover:text-yellow-300 transition">
          Головна
        </Link>
        <Link to="/shop" className="hover:text-yellow-300 transition">
          Магазин
        </Link>
        <Link to="/contact" className="hover:text-yellow-300 transition">
          Контакти
        </Link>
        <Link to="/about" className="hover:text-yellow-300 transition">
          Про нас
        </Link>
      </div>
    </nav>
  );
}



export default Navbar;