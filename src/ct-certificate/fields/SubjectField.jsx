import React from "react";
import { useShowValue } from "../../shared/show/ShowContext";
import TextField from "../../shared/show/fields/TextField";
import { Subject } from "./subject";

const SubjectField = ({ source, label }) => {
  const key = useShowValue(source);

  return <TextField source={source} label={label} value={Subject[key]} />;
};

export default SubjectField;
