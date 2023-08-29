import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";

export default function Buttons({ value, title }) {
  const { handleButtonChange } = useContext(Context);
  return (
    <>
      <button
        className="btns"
        value={value}
        onClick={(e) => handleButtonChange(e)}
      >
        {title}
      </button>
    </>
  );
}
