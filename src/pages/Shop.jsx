import React, { useEffect } from "react";
import Recommended from "../components/Recommended/Recommended";
import Sidebar from "../components/Sidebar/Sidebar";
import Products from "../components/Products/Products";

const Shop = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="mt-[68px] bg-light">
      <div className="w-full p-10 flex ">
        <Sidebar />
        <div className="flex flex-col w-full items-center justify-start  relative">
          {/* <Recommended /> */}
          <Products />
        </div>
      </div>
    </main>
  );
};

export default Shop;
