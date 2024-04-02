import React, { useContext } from "react";
import "./Products.css";
import { Context } from "../../context/ContextAPI";

const Products = () => {
  const { result } = useContext(Context);
  return (
    <>
      <section className="card-container w-ful flex flex-wrap justify-evenly">
        {result}
      </section>
    </>
  );
};

export default Products;
