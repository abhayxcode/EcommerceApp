import React, { useContext } from "react";
import { Context } from "../../context/ContextAPI";

const Products = () => {
  const { result } = useContext(Context);
  return (
    <>
      <section className="w-[95%] grid grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-5 sm:ml-2 sm:mt-2">
        {result}
      </section>
    </>
  );
};

export default Products;
