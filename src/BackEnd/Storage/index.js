import React from "react";
import useStorage from "./hooks";
import InputNumber from "../../Components/InputNumber";
import { Field, Product, StorageDiv, Image } from "./styles";
const Storage = () => {
  const storage = useStorage();

  console.log("data", storage);

  return (
    <StorageDiv>
      {storage.data.map((product) => {
        const { item, description, price, id, quantity, image } = product;
        return (
          <Product key={id}>
            <Image src={image} />
            <Field value={item} onChange={(e) => storage.setData()} />
            <Field value={description} />
            <InputNumber value={price} label="Price" />
            <InputNumber value={quantity} label="Quantity" />
          </Product>
        );
      })}
    </StorageDiv>
  );
};

export default Storage;
