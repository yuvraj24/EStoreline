import React, { useState } from "react";
import "../../css/common.css";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { CategoryOptions } from "./CategoryOptions";
import { ColorOptions } from "./ColorOptions";
import { SizeOptions } from "./SizeOptions";

export const FilterView = ({}) => {
  let [price, setPrice] = React.useState([0, 5000]);

  function valuetext(value) {
    return `${value} $`;
  }

  function handlePriceChange(event, newValue) {
    console.log(newValue);
    setPrice(newValue);
  }

  return (
    <div class="col-sm-3 bg-light pt-4 pb-4">
      <div>
        <h5>Categories</h5>
        <CategoryOptions isCheckShow={false} />
        <CategoryOptions isCheckShow={false} />
      </div>

      <div class="bg-light mt-4">
        <h5>Brand</h5>
        <CategoryOptions />
        <CategoryOptions />
        <CategoryOptions />
      </div>

      <div class="bg-light mt-4">
        <h5>Price</h5>
        <div class="row justify-content-between pl-3 pr-3">
          <Typography id="range-slider" class="text-secondary" gutterBottom>
            ${price[0]}
          </Typography>
          <Typography id="range-slider" class="text-secondary" gutterBottom>
            ${price[1]}
          </Typography>
        </div>
        <Slider
          value={price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          step={1}
          max={5000}
          min={0}
        />
      </div>

      <div class="bg-light mt-4">
        <h5>Size</h5>
        <div class="row pl-3 pr-3">
          <SizeOptions color={"#FFFFFF"} name={"S"} />
          <SizeOptions color={"#FFFFFF"} name={"M"} />
          <SizeOptions color={"#FFFFFF"} name={"L"} />
          <SizeOptions color={"#FFFFFF"} name={"XL"} />
          <SizeOptions color={"#FFFFFF"} name={"2XL"} />
        </div>
      </div>

      <div class="bg-light mt-4">
        <h5>Colors</h5>
        <div class="row pl-3 pr-3">
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
      {/* </div> */}

      {/* <div class="col-9 bg-secondary">
          <h5>Categories</h5>
        </div> */}
    </div>
  );
};
