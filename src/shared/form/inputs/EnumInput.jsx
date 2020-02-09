import React from "react";
import { useFormContext } from "../FormContext";
import CustomInputLayout from "./layout/CustomInputLayout";

const EnumInput = ({ fieldName, label, options }) => {
  const formikProps = useFormContext();
  const { values, setFieldValue, handleBlur, errors, touched } = formikProps;

  const component = (
    <select
      name={fieldName}
      value={values[fieldName]}
      onChange={event => {
        setFieldValue(fieldName, event.target.value);
      }}
      onBlur={handleBlur}
      className={
        "form-control " +
        ((errors[fieldName] && touched[fieldName] && "is-invalid") || "")
      }
    >
      <option key={0}></option>
      {options.map(option => {
        return (
          <option value={option.key} key={option.key} label={option.value} />
        );
      })}
    </select>
  );

  return (
    <CustomInputLayout
      inputComponent={component}
      fieldName={fieldName}
      label={label}
    />
  );
};

export default EnumInput;
