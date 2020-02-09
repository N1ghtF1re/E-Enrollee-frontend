import { getLabel } from "../../labelUtils";
import React from "react";
import { useListValue } from "../ListContext";

/**
 * @param label -- label
 * @param source -- source
 * @param index -- index of the row (-1) if header row
 * @constructor
 */
const TableColumn = ({ label, value, source, index }) => {
  const displayedLabel = getLabel(label, source);
  const valueFromContext = useListValue(source, index);
  const displayedValue = value || valueFromContext;

  if (index === -1) {
    return <th>{displayedLabel}</th>;
  } else {
    return <td>{displayedValue}</td>;
  }
};

export default TableColumn;
