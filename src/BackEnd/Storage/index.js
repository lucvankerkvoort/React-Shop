import React from "react";
import useStorage from "./hooks";
import { Field, Product, StorageDiv } from "./styles";
const Storage = () => {
  const storage = useStorage();

  console.log("data", storage);

  return (
    <StorageDiv>
      {storage.data.map((product) => {
        const { item, description, price, id, quantity, image } = product;
        return (
          <Product key={id}>
            <img src={image} width="50px" height="50px" />
            <Field value={item} onChange={(e) => storage.setData()} />
            <Field value={description} />
            <Field value={price} />
            <Field value={quantity} />
          </Product>
        );
      })}
    </StorageDiv>
  );
};

export default Storage;
