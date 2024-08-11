import React, { useContext, useEffect } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../context/ContextAPI";
import data from "../data/Products";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(Context);

  const finalCartForStripe = [];

  cartItems.forEach((item) => {
    item.count > 0
      ? finalCartForStripe.push({
          price_Id: data.find((product) => product.id === item.id).price_Id,
          count: item.count,
        })
      : "";
  });

  const checkoutStripe = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: finalCartForStripe }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.assign(response.url);
        }
      });

    // setCartItems(getDefaultCart());
  };

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-[95vh] mt-[68px] flex flex-col justify-start items-center p-20 pt-10">
      <h1 className="uppercase text-4xl font-bold mb-10">
        {totalAmount > 0 ? "Your Cart" : "Your Shopping Cart is Empty"}
      </h1>
      <div className="flex justify-evenly gap-10 w-full p-5 px-10">
        {totalAmount > 0 ? (
          <div className="w-[50%] flex flex-col gap-5">
            {cartItems.map((item) => {
              return item.count > 0 ? (
                <CartItem key={item.id} {...data[item.id - 1]} />
              ) : (
                ""
              );
            })}
          </div>
        ) : (
          " "
        )}
        <div className="w-[30%] ">
          {totalAmount > 0 ? (
            <>
              <div className="flex justify-between text-3xl">
                <p> Subtotal : </p> <span>${totalAmount}</span>
              </div>
              <div className="flex text-2xl justify-between text-gray-500">
                <p> Discount (10% off) : </p>{" "}
                <span>- ${Math.floor(totalAmount * 0.1)}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-4xl">
                <p> Total : </p>{" "}
                <span>${totalAmount - Math.floor(totalAmount * 0.1)}.00</span>
              </div>
            </>
          ) : (
            ""
          )}

          <div className="flex mt-4 justify-center">
            {totalAmount > 0 ? (
              <button
                className="font-semibold hover:bg-dark-variant hover:text-light cursor-pointer w-[180px] h-[50px] uppercase bg-dark text-light border-none m-3 p-1 rounded-lg text-[12px] tracking-wide"
                onClick={() => {
                  checkoutStripe();
                  // navigate("/");
                }}
              >
                Checkout
              </button>
            ) : (
              ""
            )}
            <button
              className="font-semibold hover:bg-dark-variant hover:text-light cursor-pointer w-[180px] h-[50px] uppercase bg-dark text-light border-none m-3 p-1 rounded-lg text-[12px] tracking-wider"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
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
