import React from "react";
import { Link } from "react-router-dom";

const SpecialProduct = ({ title, text, img }) => {
  return (
    // <div className="flex justify-center items-center gap-5 w-full p-6 bg-gradient-to-r from-[#27383C] to-[#274951]">
    <div className="flex justify-center items-center gap-5 w-full p-6 bg-gradient-to-r from-dark to-dark-variant rounded-xl">
      <div className="flex flex-col items-start gap-6 w-[55%] text-white">
        <h2 className="text-lg tracking-[-0.50px] w-full">
          {title ? title : "Gadget Store"}
        </h2>
        <h2 className="md:max-w-full max-w-xs text-4xl md:text-[34px] font-bold  tracking-[-0.50px] mt-3">
          {text ? text : "One solution for all your gadgets"}
        </h2>

        <Link
          className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px] rounded-xl"
          to="/shop"
        >
          Shop Now
        </Link>
      </div>
      <div className="w-[45%]">
        <img
          className="h-[300px] md:h-auto max-h-[300px] object-contain"
          src={img ? img : "/src/assets/homeBanner.png"}
          alt="sammoghadamkh"
        />
      </div>
    </div>
  );
};

export default SpecialProduct;
