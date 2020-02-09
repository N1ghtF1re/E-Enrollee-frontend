import { getLabel } from "../../labelUtils";
import React from "react";
import { useListValue } from "../ListContext";
import "./TableColumn.css";
import { useFilter, useSort } from "../FilterContext";
import { SORT_TYPE } from "../const";
import Filter from "../filter/Filter";
import Sort from "../sort/Sort";

/**
 * @param label -- label
 * @param value
 * @param source -- source
 * @param index -- index of the row (-1) if header row
 * @param sortable
 * @param filterable
 * @constructor
 */
const TableColumn = ({
  label,
  value,
  source,
  index,
  sortable = false,
  filterable = false
}) => {
  const displayedLabel = getLabel(label, source);
  const valueFromContext = useListValue(source, index);
  const displayedValue = value || valueFromContext;

  if (index === -1) {
    return (
      <th>
        <div style={{height: '20px', textAlign: 'center'}}>
          {displayedLabel}
          {sortable && <Sort source={source} />}
        </div>
        <div className='mt-1' style={{height: '30px', textAlign: 'center'}}>
          {filterable && (
            <Filter comparison={"ct"} field={source} type={"string"} />
          )}
        </div>
      </th>
    );
  } else {
    return <td>{displayedValue}</td>;
  }
};

export default TableColumn;
