import React from "react";
import { ProductImageView } from "./ProductImageView";
import { ProductDescription } from "./ProductDescription";

export const ProductDetails = (props) => {
  //   let typeId = props.match.params.id;
  const { data } = props.location;
  console.log(props.location);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item" aria-current="page">
            <a href="/">
              <label>Home</label>
            </a>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <a href="/collection/1">
              <label>{data && data[0] == 1 ? "Men" : "Women"}</label>
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <label>{data && data[1]}</label>
          </li>
        </ol>
      </nav>

      <div className='row col container-fluid'>
        <div className='col-7 mt-0 mr-0'>
          <ProductImageView />
        </div>
        <div className='col-5 mt-3'>
          <ProductDescription productName={data && data[1]} />
        </div>
      </div>
    </div>
  );
};
