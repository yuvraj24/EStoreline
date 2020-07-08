import React, { useEffect, useState } from "react"; 
import { ProductItem } from "../../product/components/ProductItem";
import { getProductsByCategory } from "../../../api/ApiController";

export const ProductView = ({ typeId }) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    let result = await getProductsByCategory(typeId);
    setProducts(result);
  }, []);

  return (
    <div class="col-sm-9">
      <div class="row justify-content">
        {products && products.map((item) => <ProductItem typeId={typeId} product={item} />)}

        {/* <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />
        <ProductItem typeId={typeId} />  */}
      </div>
    </div>
  );
};
