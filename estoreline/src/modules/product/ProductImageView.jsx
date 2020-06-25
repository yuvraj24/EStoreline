import React, { useState } from "react";
import { ProductImage } from "../product/ProductImage.jsx";

export const ProductImageView = ({ productName }) => {
  const [image, setImage] = useState(
    "https://colorlib.com/preview/theme/cozastore/images/product-detail-01.jpg"
  );

  return (
    <div class="ml-5 mt-0 row">
      <div className="col-3 pl-5 pt-0">
        <ProductImage
          width={"60%"}
          height="80%"
          src="https://colorlib.com/preview/theme/cozastore/images/product-detail-01.jpg"
          setImage={(src) => setImage(src)}
        />
        <ProductImage
          width={"60%"}
          height="80%"
          src="https://colorlib.com/preview/theme/cozastore/images/product-detail-02.jpg"
          setImage={(src) => setImage(src)}
        />
        <ProductImage
          width={"60%"}
          height="80%"
          src="https://colorlib.com/preview/theme/cozastore/images/product-detail-01.jpg"
          setImage={(src) => setImage(src)}
        />
        <ProductImage
          width={"60%"}
          height="80%"
          src="https://colorlib.com/preview/theme/cozastore/images/product-detail-02.jpg"
          setImage={(src) => setImage(src)}
        />
      </div>
      <div class="col-9 mr-0 pl-0">
        <div>
          <ProductImage width="90%" height="80%" src={image} />
          <div style={{ position: "absolute", left:0, top:'50%', justifyContent:'space-between'}}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
