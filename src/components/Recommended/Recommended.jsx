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
    <div className="recommended">
      <button className="close-btn" onClick={closeSidebar}>
        <ImCross className="close-icon" />
      </button>

      <div className="recommended-flex">
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
