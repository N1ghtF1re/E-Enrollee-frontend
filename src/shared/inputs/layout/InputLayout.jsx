import {useFormContext} from "../../form/FormContext";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";
import React from "react";
import {getLabel} from "../utils";
import Feedback from "react-bootstrap/Feedback";

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

    const visiblePlaceholder = placeholder || `Enter your ${visibleLabel}`;

    return (
        <FormGroup>
            <FormLabel htmlFor={fieldName}>{visibleLabel}</FormLabel>
            <FormControl
                name={fieldName}
                type={type}
                placeholder={visiblePlaceholder}
                value={values[fieldName]}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors[fieldName] && touched[fieldName]}
            />
            {errors[fieldName] && touched[fieldName] && (
                <Feedback type='invalid'>
                    {errors[fieldName]}
                </Feedback>
            )}
        </FormGroup>
    )
};

export default InputLayout;