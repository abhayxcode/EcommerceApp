import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";

const CartItem = ({ id, img, title, newPrice }) => {
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(Context);
  return (
    <div className="cartItem w-[700px] p-10 h-[250px] flex items-center gap-5 rouned-[25px] m-[30px] mt-0 shadow-cart  ">
      <div className=" h-full w-[45%] flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-full max-h-full object-contain"
        />
      </div>
      <div className="description w-full text-[30px]">
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${newPrice}</p>
        <div className="count-handler">
          <button
            className="btns text-[20px]"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            value={cartItems[id]}
            className="w-[100px] text-[20px] text-center font-bold mx-3"
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="btns text-[20px]" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
