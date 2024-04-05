import React, { useContext, useState } from "react";
import "./Recommended.css";
import { Context } from "../../context/ContextAPI";

// import { ImCross } from "react-icons/im";

const brands = [
  "all",
  "apple",
  "dell",
  "hp",
  "canon",
  "kodak",
  "sony",
  "realme",
  "samsung",
  "boat",
];

const Recommended = () => {
  const { handleButtonChange } = useContext(Context);
  const [selectedBrand, setSealectedBrand] = useState("all");
  // const closeSidebar = () => {
  //   const recommended = document.querySelector(".recommended");
  //   recommended.classList.remove("transform");
  // };
  return (
    <div className="p-5 flex flex-col items-center w-full  mb-5 absolute top-0 ">
      {/* <button className="close-btn hidden" onClick={closeSidebar}>
        <ImCross className="close-icon" />
      </button> */}

      <div className="flex w-full justify-around">
        {brands.map((item, index) => {
          return (
            <button
              key={index}
              className={`btns  capitalize font-semibold ${
                selectedBrand === item
                  ? "bg-[#4c4c4c] text-white"
                  : "bg-white text-[#323232]"
              }`}
              value={item}
              onClick={(e) => {
                handleButtonChange(e);
                setSealectedBrand(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
