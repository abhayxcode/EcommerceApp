import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaRegStarHalfStroke } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Review from "../components/Review/Review";
import ReviewForm from "../components/Review/ReviewForm";
import { useParams } from "react-router-dom";

const ProductDetail = ({ productList }) => {
  const { id } = useParams();

  const {
    img,
    title,
    keywords,
    reviews,
    prevPrice,
    newPrice,
    company,
    category,
    newProduct,
    stockLeft,
    details,
  } = productList.find((product) => product.id === Number(id));

  const [reviewState, setReviewState] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <>
      <main className="mt-[68px] bg-gray-50 flex flex-col md:gap-10  items-start justify-start mx-auto w-auto md:w-full">
        {/* Info */}
        {/* <span className=" text-md">{reviews}</span> */}
        <div className="flex md:flex-col flex-row gap-[47px] items-start justify-start max-w-[1290px] mx-auto w-full py-10">
          <div className="w-1/2 aspect-square object-cover">
            <img
              className="md:h-[595px] sm:h-auto h-full w-full max-h-[595px] object-contain"
              src={img}
              alt="product image"
            />
          </div>

          <div className="flex flex-col gap-[30px] items-start justify-start w-1/2">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <h2 className="md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900 font-bold tracking-[0.5px] capitalize">
                {title}
              </h2>
              <div className="flex gap-[15px] items-center justify-start w-full">
                <div className="flex">
                  <AiFillStar className="text-[#FF9533]" />
                  <AiFillStar className="text-[#FF9533]" />
                  <AiFillStar className="text-[#FF9533]" />
                  <AiFillStar className="text-[#FF9533]" />
                  <AiFillStar className="text-[#FF9533]" />
                </div>
                <h2 className="text-gray-500 text-sm tracking-[-0.50px] w-auto">
                  {reviews}
                </h2>
              </div>
              <h2 className="text-4xl sm:text-[32px] md:text-[34px] text-sky-900 font-bold tracking-[-0.50px] w-full">
                $ <del className="font-light text-sky-800">{prevPrice}</del>{" "}
                {newPrice}
              </h2>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <h2
                  className={`text-lg tracking-[-0.50px] w-full text-left font-normal ${
                    stockLeft == 0 ? "text-red-600 font-semibold" : ""
                  }`}
                >
                  <span className="text-gray-500 font-normal">
                    Stock Left :{" "}
                  </span>
                  {stockLeft === 0 ? "Out of Stock" : stockLeft}
                </h2>

                <h2 className="text-lg tracking-[-0.50px] w-full text-left font-normal capitalize">
                  <span className="text-gray-500">Category :</span> {category}
                </h2>
              </div>
              <p className="leading-[35.00px] md:max-w-full text-gray-500 text-lg tracking-[-0.50px]">
                {details}
              </p>
            </div>

            <div className="flex gap-[20px] items-center justify-start">
              <div className="border border-black border-solid flex gap-[15px] items-center justify-center p-2">
                <FiMinusCircle className="cursor-pointer h-6 w-6 text-gray-400" />
                <h2 className="text-black text-lg tracking-[-0.50px]">1</h2>
                <FiPlusCircle className="cursor-pointer h-6 w-6" />
              </div>
              <h2 className="hover:bg-[#4f9d91] cursor-pointer bg-[#214e47] justify-center sm:p-5  py-2 px-5 text-lg text-white tracking-[-0.50px] w-auto">
                Add to Cart
              </h2>
              <div
                className="cursor-pointer p-2 hover:bg-gray-200 h-full"
                onClick={() => setWishlisted(!wishlisted)}
              >
                {wishlisted ? (
                  <FaHeart className="text-[28px]" />
                ) : (
                  <FaRegHeart className="text-[28px] " />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Detail and Reviews */}
        <div className="flex md:flex-col gap-[50px] items-start justify-center max-w-[1290px] mx-auto w-full pb-20 min-h-[500px]">
          <div className="flex flex-col gap-[42px] items-start justify-start w-full">
            {/* Header */}
            <div className="flex gap-[50px] justify-start w-full">
              <div className="flex flex-col gap-2 w-auto">
                <h2
                  className={`cursor-pointer text-2xl md:text-[22px] text-${
                    reviewState ? "gray-500" : "black"
                  } sm:text-xl tracking-[-0.50px] w-auto`}
                  onClick={() => setReviewState(false)}
                >
                  Description
                </h2>
                {!reviewState && (
                  <hr className="bg-gray-800 h-1 w-full transition" />
                )}
              </div>
              <div className="flex flex-col gap-2 w-auto">
                <h2
                  className={`cursor-pointer text-2xl md:text-[22px] text-${
                    !reviewState ? "gray-500" : "black"
                  } sm:text-xl tracking-[-0.50px] w-auto`}
                  onClick={() => setReviewState(true)}
                >
                  Review
                </h2>
                {reviewState && <hr className="bg-gray-800 h-1 w-full" />}
              </div>
            </div>

            {reviewState ? (
              <div className="flex flex-col gap-10">
                <Review />
                <Review />
              </div>
            ) : (
              <h2 className="leading-[35.00px] text-base text-gray-500 tracking-[-0.50px]">
                {details}
              </h2>
            )}
          </div>

          <div className="flex justify-center items-center w-full p-6 bg-gradient-to-r from-[#27383C] to-[#274951]">
            <div className="flex flex-col items-start gap-6 w-full text-white">
              <h2 className="text-lg tracking-[-0.50px] w-full">Living Room</h2>
              <h2 className="md:max-w-full max-w-xs text-4xl md:text-[34px] font-bold  tracking-[-0.50px] mt-3">
                The best foam padded chair
              </h2>

              <button
                className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                // onClick={() => navigate("/shop")}
              >
                Shop Now
              </button>
            </div>
            <div className="">
              <img
                className="h-[300px] md:h-auto max-h-[300px] object-cover"
                src="/src/assets/laptop.jpg"
                alt="sammoghadamkh"
              />
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className=" mx-auto w-full px-28 pb-10">
          <ReviewForm />
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
