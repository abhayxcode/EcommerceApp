import React from "react";
import "./Recommended.css";
import Buttons from "../Buttons";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons value="" title="All Products" />
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
    </>
  );
};

export default Recommended;
