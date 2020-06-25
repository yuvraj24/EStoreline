import React from "react";

export const CategoryOptions = ({ isCheckShow = true}) => {
  return (
    <div class="form-check mt-3">
      {isCheckShow && (
        <input type="checkbox" class="form-check-input" id="filledInCheckbox" />
      )}
      <label class="form-check-label text-secondary" for="filledInCheckbox">
        Mens
      </label>
    </div>
  );
};
