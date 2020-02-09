import React from "react";
import { useListValue } from "../ListContext";
import { formatDateToReadableFormat } from "../../dateUtils";
import TableColumn from "./TableColumn";

const DateTableColumn = ({
  label,
  value,
  source,
  index,
  filterable,
  sortable
}) => {
  const valueFromContext = useListValue(source, index);
  const displayedValue = formatDateToReadableFormat(value || valueFromContext);

  return (
    <TableColumn
      source={source}
      value={displayedValue}
      label={label}
      index={index}
      filterable={filterable}
      sortable={sortable}
    />
  );
};

export default DateTableColumn;
