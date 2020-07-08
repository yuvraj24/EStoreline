import React from "react";

export const ProductImage = ({ width, height, src, setImage }) => {
  return (
    <div
      className="mt-4"
      onClick={() => {
        setImage(src);
      }}
    >
      <img width={width} height={height} src={src} />
    </div>
  );
};
