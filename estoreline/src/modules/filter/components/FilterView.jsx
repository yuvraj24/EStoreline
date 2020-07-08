import React, { useEffect, useState } from "react";
import "../../../css/common.css";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { CategoryOptions } from "./CategoryOptions";
import { ColorOptions } from "./ColorOptions";
import { SizeOptions } from "./SizeOptions";
import { getProductFilters } from "../../../api/ApiController";
import { fetchFilters, fetchFiltersSuccess } from "../actions/filterActions";

export const FilterView = ({ dataSource, loading, dispatch }) => { 
  // alert(dataSource)
  let [price, setPrice] = React.useState([0, 5000]); 

  useEffect(() => {
    getdataSource();
  }, []);

  async function getdataSource() {
    dispatch(fetchFilters())
    let result = await getProductFilters(); 
    dispatch(fetchFiltersSuccess(result))
    // alert(JSON.stringify(result[0].Category[0].categoryName))
  }

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
        {dataSource &&
          dataSource.length > 0 &&
          dataSource[0].Category &&
          dataSource[0].Category.length > 0 &&
          dataSource[0].Category.map((item) => (
            <CategoryOptions isCheckShow={false} category={item} />
          ))}
        {/* <CategoryOptions isCheckShow={false} />
        <CategoryOptions isCheckShow={false} /> */}
      </div>

      <div class="bg-light mt-4">
        <h5>Brand</h5>
        {dataSource &&
          dataSource.length > 0 &&
          dataSource[3].Brand &&
          dataSource[3].Brand.length > 0 &&
          dataSource[3].Brand.map((item) => (
            <CategoryOptions isCheckShow category={item} />
          ))}
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
          {dataSource &&
            dataSource.length > 0 &&
            dataSource[2].Size &&
            dataSource[2].Size.length > 0 &&
            dataSource[2].Size.map((item) => <SizeOptions name={item.sizeName} />)}
        </div>
      </div>

      <div class="bg-light mt-4">
        <h5>Colors</h5>
        <div class="row pl-3 pr-3">
          {dataSource &&
            dataSource.length > 0 &&
            dataSource[1].Color &&
            dataSource[1].Color.length > 0 &&
            dataSource[1].Color.map((item) => (
              <ColorOptions color={item.colorValue} name={item.colorName} />
            ))}
          {/* <ColorOptions color={"black"} name="Black" />
          <ColorOptions color={"white"} name="White" />
          <ColorOptions color={"green"} name="Green" />
          <ColorOptions color={"skyblue"} name="Blue" />
          <ColorOptions color={"red"} name="Red" />
          <ColorOptions color={"violet"} name="Violet" />
          <ColorOptions color={"orange"} name="Orange" />
          <ColorOptions color={"yellow"} name="Yellow" /> */}
        </div>
      </div>
      {/* </div> */}

      {/* <div class="col-9 bg-secondary">
          <h5>Categories</h5>
        </div> */}
    </div>
  );
};
