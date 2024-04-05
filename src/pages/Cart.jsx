import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../context/ContextAPI";
import data from "../data/Products";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(Context);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <main className="cart mt-[68px] flex justify-center gap-[100px] items-start p-[50px]">
      {totalAmount > 0 ? (
        <div className="cart-items mt-15">
          {data.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} {...product} />;
            }
          })}
        </div>
      ) : (
        " "
      )}
      {totalAmount > 0 ? (
        <div className="checkout text-[2.5rem] text-center ">
          <p> Subtotal: ${totalAmount} </p>
          <button
            className="hover:bg-[#444444] hover:text-white cursor-pointer w-[180px] h-[50px] uppercase bg-[rgb(19,19,19)] text-white border-none m-3 p-1 rounded-lg text-[12px] tracking-wide"
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            Checkout
          </button>
          <button
            className="hover:bg-[#444444] hover:text-white cursor-pointer w-[180px] h-[50px] uppercase bg-[rgb(19,19,19)] text-white border-none m-3 p-1 rounded-lg text-[12px] tracking-wide"
            onClick={() => navigate("/")}
          >
            {" "}
            Continue Shopping{" "}
          </button>
        </div>
      ) : (
        <h1 className="uppercase"> Your Shopping Cart is Empty</h1>
      )}
    </main>
  );
};

export default Cart;

// @media only screen and (max-width: 600px) {
//   .cart {
//     flex-direction: column;
//     gap: 50px;
//   }
//   .cart h1 {
//     margin-top: 10px;
//     font-size: 18px;
//   }

//   .cartItem {
//     width: 80vw;
//     padding: 10px;
//     height: 100px;
//     margin: 10px 0px;
//   }

//   .cartItem img {
//     width: 80px;
//     margin: 0px 20px;
//   }

//   .cartItem .description {
//     width: 100%;
//     font-size: 14px;
//   }

//   .count-handler {
//     margin-top: 10px;
//   }
//   .count-handler input {
//     width: 50px;
//     height: 30px;
//     margin-left: 8px;
//     margin-right: 8px;
//   }

//   .count-handler .btns {
//     font-size: 20px;
//     height: 30px;
//     width: 50px;
//     padding: 0px;
//   }

//   .checkout {
//     font-size: 1.8rem;
//   }
//   .checkout button {
//     width: 180px;
//     height: 50px;
//   }
// }
