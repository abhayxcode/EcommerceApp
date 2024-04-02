import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import ReviewForm from "./ReviewForm";

const Review = () => {
  return (
    <div className="flex flex-1 flex-col gap-2.5 items-end justify-start my-0 w-full">
      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
        <div className="flex gap-[15px] items-center justify-start w-40">
          <img
            className="h-[40px] md:h-auto rounded-full w-[40px]"
            src="/src/assets/laptop.jpg"
            alt="user-image"
          />
          <div className="flex flex-col gap-1 items-start justify-start">
            <h2 className="text-black text-sm tracking-[-0.50px] w-auto">
              Ralph Edwards
            </h2>
            <h2 className="text-gray-700 text-xs tracking-[-0.50px] w-auto">
              2 minutes ago
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
      <h2 className="leading-[35.00px] max-w-[565px] md:max-w-full text-black text-sm tracking-[-0.50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis
        massa tristique augue dignissim volutpat. Quis ultricies eu libero
        tortor dictumst.
      </h2>
    </div>
  );
};

export default Review;
