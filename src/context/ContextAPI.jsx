import React, { createContext, useState } from "react";
import data from "../data/Products.js";
import Card from "../components/Products/ProductCard.jsx";

export const Context = createContext(null);

const getDefaultCart = () => {
  let cart = [];
  for (let i = 0; i < data.length; i++) {
    cart[i] = { id: i + 1, count: 0 };
  }
  return cart;
};

export const ContextAPIProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [selectedFilters, setSelectedFilters] = useState({
    price: null,
    category: null,
    brand: null,
  }); //radio-btns and recommendation btn
  const [queries, setQueries] = useState([]); //Search bar query

  const [cartItems, setCartItems] = useState(getDefaultCart());

  // ------------ Search filter Functionality ------------
  const handleSearchChange = (e) => {
    setQueries(e.target.value?.split(" "));
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

    return filteredProducts;
  }

  const getProductCount = (id) => {
    const count = cartItems.find((item) => item.id === id)?.count;
    return count;
  };
  // Add one to cartItem count
  const addToCart = (id) => {
    console.log(getProductCount(id));
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  //Remove one from cartItem count
  const removeFromCart = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  // update cartitems count at once through input
  const updateCartItemCount = (newCount, id) => {
    setCartItems(
      cartItems.map((item) => {
        return item.id === id ? { ...item, count: newCount } : item;
      })
    );
  };

  // delete whole item from the cart at once
  const deleteFromCart = (id) => {
    setCartItems((cartItems) =>
      cartItems.map((item) => {
        return item.id === id ? { ...item, count: 0 } : item;
      })
    );
  };

  // total price of cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    let cartCount = 0;
    cartItems.map((item) => {
      if (item.count > 0) {
        const itemInfo = data.find((product) => product.id === item.id);
        totalAmount += item.count * itemInfo.newPrice;
        cartCount++;
      }
    });

    return totalAmount;
  };
  //Final Cart COunt
  const getFinalCartCount = () => {
    let cartCount = 0;
    cartItems.map((item) => {
      if (item.count > 0) cartCount++;
    });
    return cartCount;
  };

  const result = filteredData(data, selectedFilters, queries);

  const contextValue = {
    user,
    setUser,
    result,
    cartItems,
    handleSearchChange,
    handleButtonChange,
    handleRadioChange,
    getProductCount,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    deleteFromCart,
    getTotalCartAmount,
    getFinalCartCount,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
