import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const CartItem = ({ id, img, title, newPrice }) => {
  const {
    addToCart,
    removeFromCart,
    getProductCount,
    updateCartItemCount,
    deleteFromCart,
  } = useContext(Context);

  return (
    <div className="flex items-center gap-10 py-4 px-10 h-[180px] rouned-[25px] shadow-cart">
      <Link
        to={`/product/${id}`}
        className="h-full w-[30%] flex items-center justify-center"
      >
        <img
          src={img}
          alt={title}
          className="w-full max-h-full object-contain"
        />
      </Link>
      <div className="w-full">
        <p className="text-[28px] font-bold">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </p>
        <p className="text-[20px] font-semibold"> Price: ${newPrice}</p>
        <div className="mt-5 flex justify-between items-center">
          <div className="w-fit count-handler">
            <button
              className="text-2xl px-4 border-none rounded-lg hover:bg-dark-variant  bg-dark text-white"
              onClick={() => {
                removeFromCart(id);
                getProductCount(id) === 1
                  ? toast.success("Removed From Cart")
                  : "";
              }}
            >
              -
            </button>
            <input
              value={getProductCount(id)}
              className="border-2 border-solid border-gray-200 w-[100px] text-[20px] text-center font-bold mx-3"
              onChange={(e) => {
                let num =
                  isNaN(e.target.value) || e.target.value == ""
                    ? 0
                    : Number(e.target.value);
                updateCartItemCount(num, id);
              }}
            />
            <button
              className="text-2xl px-4 border-none rounded-lg hover:bg-dark-variant  bg-dark  text-white"
              onClick={() => addToCart(id)}
            >
              +
            </button>
          </div>
          <div
            onClick={() => {
              deleteFromCart(id);
              toast.success("Removed from Cart!");
            }}
          >
            <RiDeleteBin6Line className="text-[20px] text-red-500 hover:translate-y-[-2px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
