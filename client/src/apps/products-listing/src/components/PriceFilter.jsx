import PropTypes from "prop-types";
import { memo, useState } from "react";

const styledInput = {
  padding: "10px",
  borderRadius: "8px",
  outline: "none",
  width: "60px",
};

const PriceFilter = ({ onPriceFilterChange }) => {
  const [priceFilter, setPriceFilter] = useState({
    from: 0,
    to: Infinity,
  });

  const handlePriceFilterChange = (key, value) => {
    const newPriceFilter = { ...priceFilter, [key]: Number(value) };
    setPriceFilter(newPriceFilter);
    onPriceFilterChange(newPriceFilter);
  };

  return (
    <div className="flex center gap-1">
      <label htmlFor="min-price">Price from</label>
      <input
        style={styledInput}
        type="number"
        min={0}
        id="min-price"
        name="min-price"
        value={priceFilter.from}
        onChange={(e) => handlePriceFilterChange("from", e.target.value)}
      />

      <label htmlFor="max-price">to</label>
      <input
        style={styledInput}
        type="number"
        min={0}
        id="max-price"
        name="max-price"
        value={priceFilter.to}
        onChange={(e) => handlePriceFilterChange("to", e.target.value)}
      />
    </div>
  );
};

PriceFilter.propTypes = {
  onPriceFilterChange: PropTypes.func.isRequired,
};

export default memo(PriceFilter);
