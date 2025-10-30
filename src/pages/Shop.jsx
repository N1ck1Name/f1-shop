import React, { useContext, useState } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "../styles/pages/shop.css";
import Toast from "../components/Toast";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [toast, setToast] = useState({ show: false, message: "" });

  const handleAdd = (product) => {
    addToCart(product);
    setToast({ show: true, message: `✅ ${product.name} додано в кошик` });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2000);
  };

  return (
    <main className="shop-page">
      <div className="container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAdd(product)}
            />
          ))}
        </div>
      </div>

      <Toast message={toast.message} show={toast.show} />
    </main>
  );
};

export default Shop;
