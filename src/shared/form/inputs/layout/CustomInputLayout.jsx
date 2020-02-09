import { useFormContext } from "../../FormContext";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import React from "react";
import { getLabel } from "../../../labelUtils";
import Feedback from "react-bootstrap/Feedback";

const CustomInputLayout = ({ fieldName, label, inputComponent }) => {
  const formikProps = useFormContext();
  const { touched, errors } = formikProps;

  const visibleLabel = getLabel(label, fieldName);

  return (
    <FormGroup>
      <FormLabel htmlFor={fieldName}>{visibleLabel}</FormLabel>
      <div>{inputComponent}</div>
      {errors[fieldName] && touched[fieldName] && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {errors[fieldName]}
        </div>
      )}
    </FormGroup>
  );
};

export default CustomInputLayout;
