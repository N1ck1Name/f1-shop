import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606150934615-3bbbf2b68e45?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">🏎️ F1 Shop</h1>
        <p className="text-lg mb-6 max-w-md">
          Відчуй швидкість, адреналін і стиль Формули 1.  
          Обирай товари улюблених команд і пілотів прямо зараз!
        </p>
        <Link
          to="/shop"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white text-lg transition"
        >
          Перейти в магазин
        </Link>
      </div>
    </div>
  );
};

export default Home;
