import React from "react";
import { CategoryOptions } from "../collection/CategoryOptions";
import { ProductItem } from "../product/ProductItem";

export const ProductView = ({ typeId }) => {
  console.log(typeId) 
  return (
    <div class="col-sm-9">
      <div class="row justify-content">
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} /> 
      </div>
    </div>
  );
};
