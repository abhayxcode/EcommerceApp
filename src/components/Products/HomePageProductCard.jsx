import React from "react";

const HomePageProductCard = ({ name, category, image, price }) => {
  return (
    <div className="flex flex-col gap-2  items-start justify-start w-full">
      <div className="h-[400px] relative w-full z-[0]">
        <img
          className="absolute h-[400px] inset-[0] justify-center m-auto object-cover w-full"
          alt="image"
          src={image}
        />
        <button className="absolute bg-gray-900 bottom-[4%] cursor-pointer  leading-[normal] left-[5%] py-[9px] text-center text-sm text-white tracking-[-0.50px] w-[106px]">
          {category}
        </button>
        <h2 className="absolute right-[5%] top-[4%] bg-red-600 px-[7px] text-sm text-white tracking-[-0.50px]">
          New
        </h2>
      </div>
      <div className="flex items-center justify-between w-full">
        <h2 className="text-black text-xl tracking-[-0.50px] w-auto">{name}</h2>
        <h2 className="text-sky-900 text-lg tracking-[-0.50px] w-auto">
          {price}
        </h2>
      </div>
    </div>
  );
};

export default HomePageProductCard;
