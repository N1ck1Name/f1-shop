import React, { useContext } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "../styles/components/productcard.css";
import "../styles/pages/shop.css";

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <main className="shop-page">
      <div className="container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}  // передаємо весь продукт
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
