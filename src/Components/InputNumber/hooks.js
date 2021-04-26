import React, { useState } from "react";

const useInputNumber = () => {
  const [quantity, setQuantity] = useState(50);

  const noNaNValue = (input) => {
    const value = parseInt(input);
    console.log("value", isNaN(value));
    return isNaN(value) ? 0 : value;
  };

  const minus = (event) => {
    event.preventDefault();
    return quantity > 0 ? setQuantity(quantity - 1) : quantity;
  };

  const plus = (event) => {
    event.preventDefault();
    return setQuantity(quantity + 1);
  };

  return { quantity, setQuantity, minus, plus, noNaNValue };
};

export default useInputNumber;
