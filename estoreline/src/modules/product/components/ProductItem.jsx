import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ typeId, product }) => {
  return (
    <div class="w-25 ml-5 pl-3 pb-5">
      <Link
        class="nav-link text-dark"
        to={{
          pathname: "/product-details",
          data: [typeId, "Lightweight Jacket"], // your data array of objects
        }}
      >
        <div>
          <img
            width="100%"
            src={product.imageLink}
            alt="IMG-PRODUCT"
          />
          {/* <a
          href="#"
          class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
        >
          Quick View
        </a> */}
        </div>
        <div class="col pl-3 pr-3 pt-3" style={{ textAlign: "center" }}>
          <a href="product-detail.html">
            <label class="text-dark">{product.productName}</label>
          </a>
          <h5 class="text-primary">$ {product.productPrice}</h5>
        </div>
      </Link>
    </div>
  );
};
