import React, { useContext } from "react";
import { Context } from "../../context/ContextAPI";

const CartItem = ({ id, img, title, newPrice }) => {
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(Context);
  return (
    <div className="cartItem">
      <img src={img} alt={title} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${newPrice}</p>
        <div className="count-handler">
          <button className="btns" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="btns" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
