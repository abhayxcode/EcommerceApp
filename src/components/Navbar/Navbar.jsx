import React, { useContext } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import { Context } from "../../context/ContextAPI";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleSearchChange } = useContext(Context);
  return (
    <>
      <nav>
        <div className="logo">
          <h2>The Gadget Store </h2>
        </div>
        <div className="nav-container">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            onChange={(e) => handleSearchChange(e)}
          />
        </div>
        <div className="profile-container">
          <Link to="/">
            <AiFillHome className="nav-icons" />
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart className="nav-icons" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
