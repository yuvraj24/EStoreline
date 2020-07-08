import React from "react";

export const SizeOptions = ({ name }) => {
  return (
    <div>
      <a
        href="#"
        class="badge badge-primary mr-2 mt-2 mb-1 pl-3 pr-3 pt-2 border"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h6 class="text-secondary">{name}</h6>
      </a>
    </div>
  );
};
