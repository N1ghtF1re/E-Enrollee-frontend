import EnumInput from "../../shared/form/inputs/EnumInput";
import React from "react";
import {Subject} from "./subject";

const options = Object.entries(Subject)
    .map(entry => {
        return {
            key: entry[0],
            value: entry[1]
        }
    });

const SubjectEnumInput = ({ fieldName, label }) => {
  return <EnumInput fieldName={fieldName} label={label} options={options} />;
};

export default SubjectEnumInput;