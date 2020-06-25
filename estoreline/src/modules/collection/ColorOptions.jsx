import React from "react";

export const ColorOptions = ({ color, name }) => {
  return (
    <div>
      <a
        href="#"
        class="badge badge-primary mr-2 mb-2 pl-3 pr-3 pt-2 border rounded"
        style={{ backgroundColor: color }}
      >
        {(name === "White" || name === "Yellow") && <h6 class="text-dark">{name}</h6>}
        {(name != "White" && name != "Yellow") && <h6 class="text-light">{name}</h6>}
      </a>
    </div>
  );
};
