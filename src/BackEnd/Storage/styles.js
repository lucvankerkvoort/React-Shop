import styled from "styled-components";

export const StorageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Product = styled.form`
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  box-shadow: 3px 3px 5px grey;
  @media (max-width: 768px) {
    margin: 5px;
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 150px;
`;

export const Field = styled.input`
  border: none;
  text-align: center;
  font-family: montserrat;
  margin: 5px;
`;
