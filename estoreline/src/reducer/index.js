import { combineReducers } from "redux";
import { filterReducer } from "../modules/filter/reducer/filterReducer";
import { productReducer } from "../modules/product/reducer/productReducer";

export default combineReducers({
  filter : filterReducer,
  product : productReducer,
});
