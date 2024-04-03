import React from "react";
import Recommended from "../components/Recommended/Recommended";
import Sidebar from "../components/Sidebar/Sidebar";
import Products from "../components/Products/Products";

const Shop = () => {
  return (
    <main className="mt-[68px] bg-orange-100">
      <div className="w-full p-10 flex">
        <Sidebar />
        <div className="flex flex-col w-full items-center justify-center">
          <Recommended />
          <Products />
        </div>
      </div>
    </main>
  );
};

export default Shop;
