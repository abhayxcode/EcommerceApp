import React, { useContext } from "react";
import { Context } from "../../../context/ContextAPI";
import "./Categories.css";
import Input from "../../Input";

const Categories = () => {
  const { handleRadioChange } = useContext(Context);
  return (
    <>
      <section>
        <h2 className="sidebar-title category-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input
              type="radio"
              name="category"
              value=""
              onChange={handleRadioChange}
            />
            <span className="checkmark"></span>
            All
          </label>

          <Input value={"laptop"} name="category" title="laptop" />
          <Input value={"camera"} name={"category"} title="camera" />
          <Input value={"mobile"} name={"category"} title="mobile" />
          <Input value={"headphone"} name={"category"} title="headphone" />
        </div>
      </section>
    </>
  );
};

export default Categories;
