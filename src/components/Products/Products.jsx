import React, { useContext } from "react";
import "./Products.css";
import { Context } from "../../context/ContextAPI";

const Products = () => {
  const { result } = useContext(Context);
  return (
    <>
      <section className="w-[95%] px-3  flex flex-wrap justify-start gap-5">
        {result}
      </section>
    </>
  );
};

export default Products;
