import React, { useContext } from "react";
import { Context } from "../../../context/ContextAPI";
import "./Price.css";
import Input from "../../Input";

const Price = () => {
  const { handleRadioChange } = useContext(Context);
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <div>
          <label className="sidebar-label-container">
            <input
              type="radio"
              name="price"
              value=""
              onChange={handleRadioChange}
            />
            <span className="checkmark"></span>
            All
          </label>

          <Input value={50} title="$ 0-100" name="price" />
          <Input value={150} title="$ 100-350" name="price" />
          <Input value={500} title="$ 350-750" name="price" />
          <Input value={999} title="$ 750-1200" name="price" />
          <Input value={1500} title="$ 1200+" name="price" />
        </div>
      </div>
    </>
  );
};

export default Price;
