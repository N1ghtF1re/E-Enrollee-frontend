import React from "react";
import { useFilter } from "../FilterContext";

const Filter = ({ field, comparison, type }) => {
  const { getFilter, setFilter } = useFilter();

  return (
    <input
      value={getFilter(field)}
      style={{
          maxWidth: '100px'
      }}
      onChange={event => {
        setFilter({
          value: event.target.value.trim(),
          comparison: comparison,
          type: type,
          field: field
        });
      }}
    />
  );
};

export default Filter;
