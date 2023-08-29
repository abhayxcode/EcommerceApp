import React from "react";
import Price from "./Price/Price";
import Categories from "./Categories/Categories";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Categories />
      <Price />
    </section>
  );
};

export default Sidebar;
