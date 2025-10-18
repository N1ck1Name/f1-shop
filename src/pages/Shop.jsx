import React, { useContext } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default Shop;
