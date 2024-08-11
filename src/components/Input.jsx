import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";

export default function Input({ value, name, title }) {
  const { handleRadioChange } = useContext(Context);

  return (
    <>
      <label className="sidebar-label-container group block relative pl-9 mb-3 capitalize cursor-pointer select-none">
        <input
          className="peer absolute opacity-0 cursor-pointer"
          type="radio"
          name={name}
          value={value}
          onChange={(e) => {
            handleRadioChange(e);
          }}
        />
        <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-full  group-hover:bg-gray-300  peer-checked:bg-white peer-checked:border-[7px] peer-checked:border-solid peer-checked:border-[#432ee2]"></span>
        {title}
      </label>
    </>
  );
}
