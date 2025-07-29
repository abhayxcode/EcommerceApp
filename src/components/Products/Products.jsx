import React, { useContext } from "react";
import { Context } from "../../context/ContextAPI";
import Card from "./ProductCard";

const Products = () => {
  const { result } = useContext(Context);

  return (
    <>
      <section className="bg-slate-300 w-[95%] h-full grid grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1  gap-5 sm:ml-2 sm:mt-2">
        {result.length === 0 ? (
          <div className="w-full col-span-4 2xl:col-span-3 lg:col-span-2 sm:col-span-1 bg-black font-bold h-full flex flex-col items-center justify-center">
            <h1 className="text-[54px]  xl:text-4xl md:hidden">
              No such products available
            </h1>

            <button
              onClick={() => window.location.reload()}
              className="transition ease-in-out duration-200 bg-dark text-light rounded-xl hover:bg-dark-variant cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl  tracking-[-0.50px]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          result.map((item) => <Card key={item.id} {...item} />)
        )}
      </section>
    </>
  );
};

export default Products;
