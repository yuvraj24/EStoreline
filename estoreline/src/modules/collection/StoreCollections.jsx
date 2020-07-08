import React from "react"; 
import { ProductView } from "../product/components/ProductView";
import FilterContainer from '../filter/containers/FilterContainer'

export const StoreCollections = (props) => {
  let typeId = props.match.params.id;
  console.log(typeId);

  return (
    <div class="container-fluid">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item" aria-current="page">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {typeId == 1 ? "Men" : "Women"}
          </li>
        </ol>
      </nav>

      <div class="row m-1">
        <FilterContainer />
        <ProductView typeId={typeId} />
      </div>
    </div>
  );
};
