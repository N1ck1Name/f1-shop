import React from "react";
import "../styles/components/cartitem.css";

function CartItem({
  item,
  onRemove,
  onIncrement,   // опційно: () => void
  onDecrement,   // опційно: () => void
}) {
  const { id, image, name, price, quantity } = item;

  const format = (n) =>
    new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 2 }).format(n);

  const total = price * quantity;
  const canDecrement = quantity > 1;

  const handleDec = () => {
    if (onDecrement && canDecrement) onDecrement(id);
  };
  const handleInc = () => {
    if (onIncrement) onIncrement(id);
  };
  const handleRemove = () => {
    if (onRemove) onRemove(id);
  };

  return (
    <div className="cart-item" role="listitem" aria-label={`Товар: ${name}`}>
      <div className="cart-item_img">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={96}
          height={96}
          onError={(e) => { e.currentTarget.src = "/fallback-product.jpg"; }}
        />
      </div>

      <div className="cart-item_info">
        <h3 className="cart-item_title">{name}</h3>
        <p className="cart-item_meta">
          Ціна: {format(price)} ₴ × {quantity}
        </p>
      </div>

      <div className="cart-item_controls" aria-label="Керування кількістю та видалення">
        <div className="qty" role="group" aria-label="Кількість">
          <button
            type="button"
            onClick={handleDec}
            disabled={!canDecrement}
            aria-label="Зменшити кількість"
            title="Зменшити"
          >
            −
          </button>

          <input
            type="number"
            value={quantity}
            readOnly
            aria-label="Кількість"
            inputMode="numeric"
          />

          <button
            type="button"
            onClick={handleInc}
            aria-label="Збільшити кількість"
            title="Збільшити"
          >
            +
          </button>
        </div>

        <p className="price" aria-live="polite">
          Разом: {format(total)} ₴
        </p>

        <button
          type="button"
          className="remove-btn"
          onClick={handleRemove}
          aria-label={`Видалити ${name} з кошика`}
          title="Видалити"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default CartItem;
