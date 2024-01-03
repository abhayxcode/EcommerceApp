import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import "./ProductCard.css";
import { useContext } from "react";
import { Context } from "../../context/ContextAPI";

const Card = ({ id, img, title, star, reviews, prevPrice, newPrice }) => {
  const { addToCart, cartItems } = useContext(Context);

  const cartItemCount = cartItems[id];

  return (
    <>
      <section className="card">
        <div className="card-img">
          <img src={img} alt={title} />
        </div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              $ <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag addToCartBttn" onClick={() => addToCart(id)}>
              <BsFillBagFill className="bag-icon" />
              {cartItemCount > 0 && <> ({cartItemCount})</>}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
