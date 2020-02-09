import React from "react";
import * as Yup from "yup";
import TextInput from "../../shared/form/inputs/TextInput";
import DateInput from "../../shared/form/inputs/DateInput";
import CreateUpdateForm from "../../shared/form/CreateUpdateForm";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .matches(
      /[A-ZА-Я][a-zа-я]*/,
      "First name must be in russian and start with big letter"
    ),
  lastName: Yup.string()
    .required("Required")
    .matches(
      /[A-ZА-Я][a-zа-я]*/,
      "Last name must be in russian and start with big letter"
    ),
  middleName: Yup.string()
    .required("Required")
    .matches(
      /[A-ZА-Я][a-zа-я]*/,
      "Middle name must be in russian and start with big letter"
    ),
  birthDate: Yup.string().required("Required")
});

const EnrolleeCreateUpdateForm = props => {
  return (
    <CreateUpdateForm
      {...props}
      validationSchema={validationSchema}
      initValues={{
        firstName: "",
        lastName: "",
        middleName: "",
        birthDate: ""
      }}
    >
      <TextInput fieldName="firstName" />
      <TextInput fieldName="lastName" />
      <TextInput fieldName="middleName" />
      <DateInput fieldName="birthDate" />
    </CreateUpdateForm>
  );
};

export default EnrolleeCreateUpdateForm;
