import React from "react";

import { useFormContext } from "../FormContext";
import CustomInputLayout from "./layout/CustomInputLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const DateInput = ({ fieldName, label, placeholder }) => {
  const formikProps = useFormContext();
  const { values, errors, touched, setFieldValue } = formikProps;

  const component = (
    <DatePicker
      name={fieldName}
      selected={values[fieldName] && new Date(values[fieldName])}
      dateFormat="dd.MM.yyyy"
      onChange={date => setFieldValue(fieldName, date)}
      className={
        "form-control " +
        ((errors[fieldName] && touched[fieldName] && "is-invalid") || "")
      }
    />
  );

  return (
    <CustomInputLayout
      inputComponent={component}
      fieldName={fieldName}
      label={label}
    />
  );
};

export default DateInput;
