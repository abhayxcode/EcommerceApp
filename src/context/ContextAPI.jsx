import React, { createContext, useState } from "react";
import data from "../data/Products.js";
import Card from "../components/Products/ProductCard.jsx";

export const Context = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ContextAPIProvider = (props) => {
  const [selectedFilters, setSelectedFilters] = useState({
    price: null,
    category: null,
    brand: null,
  }); //radio-btns and recommendation btn
  const [queries, setQueries] = useState([]); //Search bar query
  const [cartItems, setCartItems] = useState(getDefaultCart()); // Cart Items

  // ------------ Search filter Functionality ------------
  const handleSearchChange = (e) => {
    setQueries(e.target.value.split(" "));
  };

  const filterItems = data.filter((item) =>
    queries.every(
      (query) =>
        item.keywords
          .toLowerCase()
          .indexOf(query.trim().toLocaleLowerCase()) !== -1
    )
  );

  // ------------ Radio filter Functionality -----------------
  const handleRadioChange = (e) => {
    if (e.target.name === "price")
      if (e.target.value === "all") {
        setSelectedFilters({ ...selectedFilters, price: e.target.value });
      } else {
        setSelectedFilters({
          ...selectedFilters,
          price: e.target.value.split(","),
        });
      }
    if (e.target.name === "category")
      setSelectedFilters({ ...selectedFilters, category: e.target.value });
  };

  // ------------- Buttons Filter Functionality --------------
  const handleButtonChange = (e) => {
    setSelectedFilters({ ...selectedFilters, brand: e.target.value });
  };

  //-------------- Main Filter Function ---------------
  function filteredData(products, selected, queries) {
    let filteredProducts = products;

    // filtering search query
    if (queries.length !== 0) {
      filteredProducts = filterItems;
    }

    // filtering on price
    if (selected.price && selected.price !== "all") {
      filteredProducts = filteredProducts.filter(
        ({ newPrice }) =>
          selected.price[0] <= Number(newPrice) &&
          Number(newPrice) <= selected.price[1]
      );
    }

    // filtering on brand
    if (selected.brand && selected.brand !== "all") {
      filteredProducts = filteredProducts.filter(
        ({ company }) => company === selected.brand
      );
    }

    // filtering on  category
    if (selected.category && selected.category !== "all") {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === selected.category
      );
    }

    return filteredProducts.length === 0 ? (
      <div className="w-full  font-bold  absolute h-full top-0 flex flex-col items-center justify-center">
        <h1 className="text-[54px]  xl:text-4xl md:hidden">
          No such products available
        </h1>
        <button
          className="p-3 bg-[#214E47] hover:bg-[#4f9d91] text-white cursor-pointer mt-3"
          onClick={() => window.location.reload()}
        >
          Reset All Filters
        </button>
      </div>
    ) : (
      filteredProducts.map((item) => <Card key={item.id} {...item} />)
    );
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

  const result = filteredData(data, selectedFilters, queries);

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
