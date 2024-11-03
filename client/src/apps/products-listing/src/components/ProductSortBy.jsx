import { PropTypes } from "prop-types";
import React, { useState } from "react";

const styledSelect = {
  padding: "10px",
  borderRadius: "8px",
  width: "fit-content",
};

const ProductSortBy = ({ onSortChange, productType }) => {
  console.log("Render sort by ----", productType);
  const [sort, setSort] = useState("");

  const handleSortChange = (value) => {
    const newSort = value;
    setSort(newSort);
    onSortChange(newSort);
  };

  return (
    <div className="flex gap-1 center">
      <label>{productType}</label>
      <select
        style={styledSelect}
        id="price-sort"
        name="price-sort"
        value={sort}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

ProductSortBy.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  productType: PropTypes.string.isRequired,
};

export default React.memo(ProductSortBy);
