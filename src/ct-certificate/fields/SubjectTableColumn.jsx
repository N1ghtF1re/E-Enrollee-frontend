import React from "react";
import TableColumn from "../../shared/list/table/TableColumn";
import { useListValue } from "../../shared/list/ListContext";
import { Subject } from "./subject";

const SubjectTableColumn = ({ source, index, sortable, label }) => {
  const key = useListValue(source, index);

  return (
    <TableColumn
      label={label}
      source={source}
      value={Subject[key]}
      index={index}
      sortable={sortable}
    />
  );
};

export default SubjectTableColumn;
