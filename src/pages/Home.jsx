import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>🏎️ F1 Shop</h1>
        <p>
          Відчуй швидкість, адреналін і стиль Формули 1.  
          Обирай товари улюблених команд і пілотів прямо зараз!
        </p>
        <Link to="/shop" className="home-button">
          Перейти в магазин
        </Link>
      </div>
    </div>
  );
};

export default Home;
