import React from "react";
import Price from "./Price/Price";
import Categories from "./Categories/Categories";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="flex flex-col pl-10 items-start gap-5 w-[200px] h-auto min-w-[200px] ">
      <div className="mb-2">
        <h1>🛒</h1>
      </div>

      <Price />
      <Categories />
    </section>
  );
};

export default Sidebar;
