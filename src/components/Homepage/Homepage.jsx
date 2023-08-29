import React, { useContext } from "react";
import "./Homepage.css";
import { Context } from "../../context/ContextAPI";

const Homepage = () => {
  const { result } = useContext(Context);
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Homepage;
