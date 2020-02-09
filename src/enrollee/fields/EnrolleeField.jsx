import React from "react";
import { Link } from "react-router-dom";
import { ENROLLEES } from "../const";
import {useShowValue} from "../../shared/show/ShowContext";
import TextField from "../../shared/show/fields/TextField";

const EnrolleeField = ({
  enrolleeIdSource,
  enrolleeNameSource
}) => {
  const enrolleeId = useShowValue(enrolleeIdSource);
  const enrolleeName = useShowValue(enrolleeNameSource);

  return (
    <TextField
      label="Enrollee"
      value={<Link to={`/${ENROLLEES}/${enrolleeId}`}>{enrolleeName}</Link>}
    />
  );
};

export default EnrolleeField;
