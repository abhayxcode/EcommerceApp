import React, { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { Context } from "../../context/ContextAPI";
import data from "../../data/Products";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(Context);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <div>
          <h1>Your Cart Items</h1>
        </div>
      ) : (
        ""
      )}
      <div className="cart">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} {...product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            Checkout
          </button>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
