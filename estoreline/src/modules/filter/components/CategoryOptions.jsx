import React from "react";

export const CategoryOptions = ({ isCheckShow = true, category }) => {
  return (
    <div class="form-check mt-3">
      {isCheckShow && (
        <input type="checkbox" class="form-check-input" id="filledInCheckbox" />
      )}
      {category && category.categoryName && (
        <a href="https://www.google.com">
          <label class="text-secondary">{category.categoryName}</label>
        </a>
      )}
      {category && category.brandName && (
        <label class="form-check-label text-secondary" for="filledInCheckbox">
          {category.brandName}
        </label>
      )}
    </div>
  );
};
