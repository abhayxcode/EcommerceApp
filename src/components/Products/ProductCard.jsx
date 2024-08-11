import React, { useState } from "react";
import ProductDetail from "../../pages/ProductDetail";
import { BsFillBagFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import toast from "react-hot-toast";
import { useContext } from "react";
import { Context } from "../../context/ContextAPI";
import { Link } from "react-router-dom";

const Card = ({ id, img, title, prevPrice, newPrice, newProduct }) => {
  const { addToCart, getProductCount } = useContext(Context);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="shadow-md shadow-gray-300 bg-white border-2 border-gray-50 w-full min-w-[270px] max-w-[320px] relative p-5 rounded-xl flex flex-col items-center justify-between gap-0  md:m-[10px] sm:w-[42vw] ">
      {newProduct && (
        <h2 className="absolute left-[5%] top-[4%] bg-red-600 px-[7px] text-sm text-white tracking-[-0.50px]">
          New
        </h2>
      )}
      <div
        className="absolute right-[7%] top-[4%] cursor-pointer w-5 h-5 "
        onClick={() => {
          !wishlisted
            ? toast.success("Added to wishlist")
            : toast.success("Removed from wishlist");
          setWishlisted(!wishlisted);
        }}
      >
        {wishlisted ? (
          <FaHeart className="text-[#535353] w-full h-full" />
        ) : (
          <FaRegHeart className="text-[#535353] w-full h-full" />
        )}
      </div>

      <Link
        to={`/product/${id}`}
        className="p-5 rounded-lg cursor-pointer card-img flex justify-center items-center h-[200px] w-full"
      >
        <img
          src={img}
          alt={title}
          className="transition hover:scale-[1.05] w-full h-full object-contain"
        />
      </Link>
      <div className="pt-3 w-full flex flex-col justify-center items-start gap-1">
        <Link
          to={`/product/${id}`}
          className="uppercase text-[18px] font-semibold sm:text-[14px] text-nowrap max-w-[230px] overflow-hidden"
        >
          {title.length >= 18 ? title.slice(0, 18) + "..." : title}
        </Link>

        <div className="w-full flex justify-between items-center sm:text-[12px]">
          <div className="text-nowrap font-bold">
            $ <del className="font-light">{prevPrice}</del> {newPrice}
          </div>
          <div className="flex items-center justify-between sm:text-[10px] ">
            <AiFillStar className="rating-star text-[#d5ab55]" />
            <AiFillStar className="rating-star text-[#d5ab55]" />
            <AiFillStar className="rating-star text-[#d5ab55]" />
            <AiFillStar className="rating-star text-[#d5ab55]" />
            <FaRegStarHalfStroke className=" rating-star text-[#d5ab55]" />
          </div>
        </div>

        <div
          className="z-10 w-full px-5 py-2 mt-3 rounded-lg transition ease-in-out duration-200 flex items-center justify-center gap-2 bg-dark text-light hover:bg-dark-variant cursor-pointer font-medium leading-[normal] tracking-[-0.50px]"
          onClick={() => {
            addToCart(id);
            getProductCount(id) === 0 ? toast.success("Added to Cart!") : "";
          }}
        >
          <p>Add to Cart</p>

          <p>{getProductCount(id) > 0 && <> ({getProductCount(id)})</>}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
