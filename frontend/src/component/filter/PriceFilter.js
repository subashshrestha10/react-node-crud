import React, { useState } from "react";
import { FilterOutlined } from "@ant-design/icons";
import CurrencyFormat from "react-currency-format";
import { Dropdown, Slider, Button } from "antd";

import './PriceFilter.scss'

export default function PriceFilter({ applyFilter, resetFilter }) {
  let [range, setRange] = useState([0, 1000]);
  let [isDropdownVisible, setIsDropdownVisible] = useState(false);
  let [isFilterApplied, setIsFilterApplied] = useState(false);

  const onSilderChange = (e) => {
    setRange(e);
  };
  const closePriceFilter = (filterMobile) => {
    setIsDropdownVisible(false);

    if (filterMobile) {
      setIsFilterApplied(true);
      applyFilter(range);
    }
  };
  const reset = () => {
    setIsFilterApplied(false);
    resetFilter();
  };
  const priceFilter = (
    <div className="price-filter">
      <Slider
        range
        defaultValue={[0, 1000]}
        min={100}
        max={100000}
        step={1000}
        onChange={onSilderChange}
      />
      <span>
        Range: {range[0]} - {range[1]}
      </span>
      <div className="w-100 d-flex justify-content-between mt-3">
        <Button onClick={() => closePriceFilter("")}>Cancel</Button>
        <Button
          onClick={() => closePriceFilter("filter")}
          type="primary"
          danger
        >
          Apply
        </Button>
      </div>
    </div>
  );
  return (
    <>
      <div className="filter-icon">
        <span>Price Filter: </span>
        <Dropdown
          trigger="click"
          overlay={priceFilter}
          visible={isDropdownVisible}
        >
          <FilterOutlined onClick={() => setIsDropdownVisible(true)} />
        </Dropdown>
      </div>
      {isFilterApplied && (
        <div className="filtering-tag">
          {"Filter By Price: "}
          <CurrencyFormat
            value={range[0]}
            displayType="text"
            decimalScale={2}
            fixedDecimalScale={true}
            thousandSeparator={true}
            prefix="RS "
            thousandSpacing="2s"
          />
          {" - "}
          <CurrencyFormat
            value={range[1]}
            displayType="text"
            decimalScale={2}
            fixedDecimalScale={true}
            thousandSeparator={true}
            prefix="RS "
            thousandSpacing="2s"
          />{" "}
          <span className="cursor-pointer" onClick={reset}>
            X
          </span>
        </div>
      )}
    </>
  );
}
