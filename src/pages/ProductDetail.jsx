import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Review from "../components/Review/Review";
import ReviewForm from "../components/Review/ReviewForm";

// import HomepageCardproduct from "components/HomepageCardproduct";

const ProductDetail = () => {
  const navigate = useNavigate();

  const [reviewState, setReviewState] = useState(false);

  function handleNavigate2() {
    window.location.href = "https://accounts.google.com/";
  }

  return (
    <>
      <main className="mt-[68px] bg-gray-50 flex flex-col md:gap-10  items-start justify-start mx-auto w-auto md:w-full">
        {/* Info */}
        <div className="flex md:flex-col flex-row gap-[47px] items-start justify-start max-w-[1290px] mx-auto w-full py-10">
          <div className="w-1/2 aspect-square object-cover">
            <img
              className="md:h-[595px] sm:h-auto h-full max-h-[595px] object-cover"
              src="/src/assets/laptop.jpg"
              alt="product image"
            />
          </div>

          <div className="flex flex-col gap-[30px] items-start justify-start w-1/2">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <h2 className="md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900 font-bold tracking-[-0.50px]">
                Complete set of sofa, pillows and bed
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
                  ( 1 review )
                </h2>
              </div>
              <h2 className="text-4xl sm:text-[32px] md:text-[34px] text-sky-900 font-bold tracking-[-0.50px] w-full">
                $ 75.00
              </h2>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <h2 className="text-lg tracking-[-0.50px] w-full text-left font-normal">
                  <span className="text-gray-500">Stock Left :</span> 18
                </h2>
                <h2 className="text-lg tracking-[-0.50px] w-full text-left font-normal">
                  <span className="text-gray-500"> SKU :</span> BA65
                </h2>
                <h2 className="text-lg tracking-[-0.50px] w-full text-left font-normal">
                  <span className="text-gray-500">Categories :</span> Chair, New
                  Arrivals, Special
                </h2>
                <h2 className="text-lg tracking-[-0.50px] w-full text-left font-normal">
                  <span className="text-gray-500">Tags :</span> Black, Chair
                </h2>
              </div>
              <h2 className="leading-[35.00px] md:max-w-full text-gray-500 text-lg tracking-[-0.50px]">
                In order to sit comfortably for long periods, people need
                freedom of movement. The Form rocking chair has a molded plastic
                shell with a wide, curved seat, which gives plenty of
                opportunity for changing one’s sitting position.
              </h2>
            </div>

            <div className="flex gap-[20px] items-start justify-start">
              <div className="border border-black border-solid flex gap-[15px] items-center justify-center p-2">
                <FiMinusCircle
                  className="cursor-pointer h-6 w-6 text-gray-400"
                  onClick={handleNavigate2}
                />
                <h2 className="text-black text-lg tracking-[-0.50px]">1</h2>
                <FiPlusCircle
                  className="cursor-pointer h-6 w-6"
                  onClick={handleNavigate2}
                />
              </div>
              <h2
                className="hover:bg-[#4f9d91] cursor-pointer bg-[#214e47] justify-center sm:p-5  py-2 px-5 text-lg text-white tracking-[-0.50px] w-auto"
                onClick={() => navigate("/")}
              >
                Add to Cart
              </h2>
              <button className="p-2 hover:bg-gray-200">
                <FaRegHeart className="text-[24px]" />
              </button>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, <br />
                <br />
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum
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
