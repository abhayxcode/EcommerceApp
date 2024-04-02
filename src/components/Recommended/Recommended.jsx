import React from "react";
import "./Recommended.css";
import Buttons from "../Buttons";
import { ImCross } from "react-icons/im";

const Recommended = () => {
  const closeSidebar = () => {
    const recommended = document.querySelector(".recommended");
    recommended.classList.remove("transform");
  };
  return (
    <div className="p-5 flex flex-col items-center w-full">
      <button className="close-btn hidden" onClick={closeSidebar}>
        <ImCross className="close-icon" />
      </button>

      <div className="flex w-full justify-around">
        <Buttons value="" title="All" />
        <Buttons value={"Apple"} title="Apple" />
        <Buttons value={"Dell"} title="Dell" />
        <Buttons value={"HP"} title="HP" />
        <Buttons value={"Canon"} title="Canon" />
        <Buttons value={"Kodak"} title="Kodak" />
        <Buttons value={"Sony"} title="Sony" />
        <Buttons value={"Realme"} title="Realme" />
        <Buttons value={"Samsung"} title="Samsung" />
        <Buttons value={"Boat"} title="Boat" />
      </div>
    </div>
  );
};

export default Recommended;
