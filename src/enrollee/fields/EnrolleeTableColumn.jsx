import React from "react";
import TableColumn from "../../shared/list/table/TableColumn";
import { Link } from "react-router-dom";
import { useListValue } from "../../shared/list/ListContext";
import { ENROLLEES } from "../const";

const EnrolleeTableColumn = ({
  enrolleeIdSource,
  enrolleeNameSource,
  index
}) => {
  const enrolleeId = useListValue(enrolleeIdSource, index);
  const enrolleeName = useListValue(enrolleeNameSource, index);

  return (
    <TableColumn
      label="Enrollee"
      value={<Link to={`/${ENROLLEES}/${enrolleeId}`}>{enrolleeName}</Link>}
      index={index}
    />
  );
};

export default EnrolleeTableColumn;
