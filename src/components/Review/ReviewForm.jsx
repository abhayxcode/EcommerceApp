import { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import toast from "react-hot-toast";

const ReviewForm = () => {
  const reviewForm = useRef();

  const submitReview = (e) => {
    if (reviewForm.current.checkValidity()) {
      e.preventDefault();
      reviewForm.current.reset();
      toast.success("Review Submitted");
    }
  };
  return (
    <div className="flex flex-col font-raleway gap-6 items-center justify-start w-full border border-solid border-gray-300 p-8">
      <h2
        className="text-4xl md:text-[28px] text-black text-center sm:text-xl tracking-[-0.50px] w-full font-bold "
        size="txtRalewayBold24"
      >
        Write your review
      </h2>
      <form
        ref={reviewForm}
        className="flex flex-col gap-8 items-start justify-start w-full md:w-full"
      >
        <div className="flex gap-[31px] items-start justify-start w-full">
          <div className="flex flex-col md:flex-col gap-5 items-start justify-start w-full">
            {/* Name */}
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <h2 className="text-black text-lg tracking-[-0.50px] w-auto">
                Your Name
              </h2>
              <input
                placeholder="Mr. Raj"
                className="outline-none border border-gray-300 border-solid p-3 placeholder:text-gray-400 sm:pr-5 text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                type="text"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <h2 className="text-black text-lg tracking-[-0.50px] w-auto">
                Your Email
              </h2>
              <input
                name="frame48096015_One"
                placeholder="raj@gmail.com"
                className="outline-none border border-gray-300 border-solid p-3 placeholder:text-gray-400 sm:pr-5 text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                type="email"
                required
              />
            </div>
            {/* Rating */}
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <h2
                className="text-black-900 text-lg tracking-[-0.50px] w-full"
                size="txtRalewayRomanSemiBold18"
              >
                Your Rating
              </h2>
              <div className="flex">
                <AiFillStar className="text-[#FF9533]" />
                <AiFillStar className="text-[#FF9533]" />
                <AiFillStar className="text-[#FF9533]" />
                <AiFillStar className="text-[#FF9533]" />
                <AiFillStar className="text-[#FF9533]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <h2 className="text-black text-lg  tracking-[-0.50px] w-full">
              Your Review
            </h2>
            <textarea
              className="outline-none resize-none border border-gray-300 border-solid h-[220px] md:h-auto p-4 w-full text-start"
              placeholder="Write your review here...."
              required
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={(e) => submitReview(e)}
          className="bg-[#214E47]  cursor-pointer font-medium leading-[normal] min-w-[155px] py-[12px] text-base text-center text-white tracking-[-0.50px] hover:bg-[#4f9d91]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
