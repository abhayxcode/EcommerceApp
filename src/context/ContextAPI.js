import React, { createContext, useState } from "react";
import data from "../data/Products";
import Card from "../components/ProductCard/ProductCard.jsx";

export const Context = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ContextAPIProvider = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState(""); //Search bar query
  const [cartItems, setCartItems] = useState(getDefaultCart()); // Cart Items

  // ------------ Search filter Functionality ------------
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filterItems = data.filter(
    (item) => item.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // ------------ Radio filter Functionality -----------------
  const handleRadioChange = (e) => {
    if (e.target.value === "All") {
      setSelectedCategory(null);
    }
    setSelectedCategory(e.target.value);
  };

  // ------------- Buttons Filter Functionality --------------
  const handleButtonChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //-------------- Filter Function ---------------
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering search Input items
    if (query) {
      filteredProducts = filterItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, newPrice, company, title }) =>
          category === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected
      );
    }
    return filteredProducts.map((item) => <Card key={item.id} {...item} />);
  }

  // Add to cart feature
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  //Remove from cart feature
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // update cart items count
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // total price of cart items
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.newPrice;
      }
    }
    return totalAmount;
  };

  //checkout
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const result = filteredData(data, selectedCategory, query);

  const contextValue = {
    result,
    cartItems,
    handleSearchChange,
    handleButtonChange,
    handleRadioChange,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    checkout,
    getTotalCartAmount,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
