import React from "react";
import Price from "./Price/Price";
import Categories from "./Categories/Categories";

const Sidebar = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-[200px] h-fit md:hidden sticky top-[108px]">
      <Price />
      <Categories />
    </section>
  );
};

export default Sidebar;
