import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Review = ({ review: { userName, date, review }, randomColor }) => {
  return (
    <div className="flex flex-1 flex-col gap-2.5 items-end justify-start my-0 w-full">
      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
        <div className="flex gap-[15px] items-center justify-start w-40">
          <FaUserCircle
            className={`h-[40px] md:h-auto w-[40px] text-${randomColor}-300`}
          />
          <div className="flex flex-col gap-1 items-start justify-start">
            <h2 className="text-black text-sm tracking-[-0.50px] w-auto">
              {userName}
            </h2>
            <h2 className="text-gray-700 text-xs tracking-[-0.50px] w-auto">
              {date}
            </h2>
          </div>
        </div>
        <div className="flex">
          <AiFillStar className="text-[#FF9533]" />
          <AiFillStar className="text-[#FF9533]" />
          <AiFillStar className="text-[#FF9533]" />
          <AiFillStar className="text-[#FF9533]" />
          <AiFillStar className="text-[#FF9533]" />
        </div>
      </div>
      <h2 className="leading-[25.00px] max-w-[565px] md:max-w-full text-black text-sm tracking-[0px]">
        {review}
      </h2>
    </div>
  );
};

export default Review;
