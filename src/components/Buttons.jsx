import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";

export default function Buttons({ value, title }) {
  const { handleButtonChange } = useContext(Context);
  return (
    <>
      <button
        className="btns bg-white font-semibold"
        value={value}
        onClick={(e) => handleButtonChange(e)}
      >
        {title}
      </button>
    </>
  );
}
