import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import { useContext } from "react";
import { Context } from "../context/ContextAPI";
import { Link } from "react-router-dom";

const Card = ({ id, img, title, reviews, prevPrice, newPrice }) => {
  const { addToCart, cartItems } = useContext(Context);

  const cartItemCount = cartItems[id];

  return (
    <>
      <section className="card m-5 p-2 w-[240px] border-[2px] border-solid border-[#ededed]  flex flex-col items-center justify-between md:w-[220px] md:m-[10px] sm:w-[42vw]">
        <Link
          // to={`/${title}`}
          to={`/productDetail`}
          className=" px-5 cursor-pointer card-img flex justify-center items-center mb-4 w-full h-full sm:mb-2"
        >
          <img src={img} alt={title} className="w-full" />
        </Link>
        <div className="card-details w-full">
          <h3 className="card-title mb-4 sm:text-[13px] sm:mb-1">{title}</h3>
          <section className="card-reviews mb-4 flex items-center justify-between sm:text-[10px] sm:mb-1">
            <div className="flex">
              <AiFillStar className="rating-star text-[#d5ab55]" />
              <AiFillStar className="rating-star text-[#d5ab55]" />
              <AiFillStar className="rating-star text-[#d5ab55]" />
              <AiFillStar className="rating-star text-[#d5ab55]" />
              <FaRegStarHalfStroke className=" rating-star text-[#d5ab55]" />
            </div>
            <span className="total-reviews text-md mr-1">{reviews}</span>
          </section>
          <section className="card-price flex justify-between items-center sm:text-[15px]">
            <div className="price">
              $ <del>{prevPrice}</del> {newPrice}
            </div>
            {/* <MdFavorite /> */}
            <div className=" flex items-center gap-3">
              {/* <MdFavorite className="text-[#535353] text-[18px] mt-1" /> */}
              <FaRegHeart className="cursor-pointer text-[#535353] sm:text-[10px]" />

              <div
                className="bag addToCartBtn flex items-center"
                onClick={() => addToCart(id)}
              >
                <BsFillBagFill className="bag-icon cursor-pointer text-[#535353] sm:text-[10px]" />
                <p>{cartItemCount > 0 && <> ({cartItemCount})</>}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
