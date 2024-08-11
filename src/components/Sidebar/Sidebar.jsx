import React from "react";
import Price from "./Price/Price";
import Categories from "./Categories/Categories";

const Sidebar = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-[240px] h-fit md:hidden sticky top-[108px] bg-dark-variant text-light rounded-lg p-5">
      <Price />
      <Categories />
    </section>
  );
};

export default Sidebar;
