import {useFormContext} from "../../FormContext";
import {FormControl} from "react-bootstrap";
import React from "react";
import {getLabel} from "../../../labelUtils";
import CustomInputLayout from "./CustomInputLayout";

const InputLayout = ({type, fieldName, label, placeholder}) => {
    const formikProps = useFormContext();
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
    } = formikProps;

    const visibleLabel = getLabel(label, fieldName);
    const visiblePlaceholder = placeholder || `Enter ${visibleLabel}`;

    const component = (
      <FormControl
        name={fieldName}
        type={type}
        placeholder={visiblePlaceholder}
        value={values[fieldName]}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={errors[fieldName] && touched[fieldName]}
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

export default InputLayout;