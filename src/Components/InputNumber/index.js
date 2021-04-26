import React, { useEffect } from "react";
import useInputNumber from "./hooks";
import { NumberInput, Field } from "./styles";
const InputNumber = ({ value, label }) => {
  const { setQuantity, minus, plus, noNaNValue, quantity } = useInputNumber();

  console.log(label);
  return (
    <NumberInput>
      <button onClick={(e) => minus(e)}>-</button>

      <div>
        <label>{label}</label>
        <Field
          value={quantity}
          onChange={(e) => setQuantity(noNaNValue(e.target.value))}
        />
      </div>
      <button onClick={(e) => plus(e)}>+</button>
    </NumberInput>
  );
};

export default InputNumber;
