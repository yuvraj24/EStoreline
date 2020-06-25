import React from "react";
import { SizeOptions } from "../collection/SizeOptions";
import { ColorOptions } from "../collection/ColorOptions";
import "../../css/header.css";

export const ProductDescription = ({ productName }) => {
  return (
    <div>
      <label style={styles.productName}>{"Lightweight Jacket"}</label>
      <h6 className="font-weight-bold mt-3">$58.79</h6>
      <h6 className="text-muted mt-4">
        Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
        Mauris consequat ornare feugiat.
      </h6>

      <div className="mt-4 ml-1 mt-2">
        <div class="ml-0 row">
          <h6 class="mt-2 mr-3">Quantity</h6>
          <div className="row ml-1">
            <h5 class="border pl-3 pt-2 pr-3 pb-2">-</h5>
            <h5 class="border pl-3 pt-2 pr-3 pb-2">0</h5>
            <h5 class="border pl-3 pt-2 pr-3 pb-2">+</h5>
          </div>
        </div>
        <div class="mt-4">
          <h6>Size</h6>
          <div class="row pl-3 pr-3 mt-2">
            <SizeOptions color={"#FFFFFF"} name={"S"} />
            <SizeOptions color={"#FFFFFF"} name={"M"} />
            <SizeOptions color={"#FFFFFF"} name={"L"} />
            <SizeOptions color={"#FFFFFF"} name={"XL"} />
            <SizeOptions color={"#FFFFFF"} name={"2XL"} />
          </div>
        </div>

        <div class="mt-4">
          <h6>Colors</h6>
          <div class="row pl-3 pr-3 mt-4">
            <ColorOptions color={"black"} name="Black" />
            <ColorOptions color={"white"} name="White" />
            <ColorOptions color={"green"} name="Green" />
            <ColorOptions color={"skyblue"} name="Blue" />
            <ColorOptions color={"red"} name="Red" />
            <ColorOptions color={"violet"} name="Violet" />
            <ColorOptions color={"orange"} name="Orange" />
            <ColorOptions color={"yellow"} name="Yellow" />
          </div>
        </div>

        <button class="text-white btn-primary mt-4 loginBtn pt-2 pb-2 pl-3 pr-3 font-weight-bold">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

const styles = {
  productName: {
    fontSize: 24,
  },
};
