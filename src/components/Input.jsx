import React, { useContext } from "react";
import { Context } from "../context/ContextAPI";

export default function Input({ value, name, title }) {
  const { handleRadioChange } = useContext(Context);

  return (
    <>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name={name}
          value={value}
          onChange={(e) => {
            handleRadioChange(e);
          }}
        />
        <span className="checkmark"></span>
        {title}
      </label>
    </>
  );
}
