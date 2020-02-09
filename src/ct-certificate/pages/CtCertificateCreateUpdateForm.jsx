import React from "react";
import * as Yup from "yup";
import TextInput from "../../shared/form/inputs/TextInput";
import CreateUpdateForm from "../../shared/form/CreateUpdateForm";
import EnrolleeInput from "../../enrollee/fields/EnrolleeInput";
import SubjectEnumInput from "../fields/SubjectEnumInput";

const validationSchema = Yup.object().shape({
    subject: Yup.string()
        .required("Required"),
    year: Yup.number()
        .required('Required'),
    ctPoints: Yup.number()
        .required('Required')
        .min(0)
        .max(100),
    certificateIdentifier: Yup.string()
        .required('Required')
        .matches(/^[0-9]{2}-[0-9]{3}-[0-9]$/gi, 'Certificate id should be in format XX-XXX-X'),
    certificateNumber: Yup.string()
        .required('Required')
        .matches(/^[0-9]{7}$/gi, 'Certificate number should be in format XXXXXX'),
    enrolleeId: Yup.string()
        .required('Required')
});

const CtCertificateCreateUpdateForm = props => {
  return (
    <CreateUpdateForm
      {...props}
      validationSchema={validationSchema}
      initValues={{
        subject: "",
        year: "",
        ctPoints: "",
        certificateIdentifier: "",
        certificateNumber: "",
        enrolleeId: ""
      }}
    >
      <SubjectEnumInput fieldName="subject" />
      <TextInput fieldName="year" />
      <TextInput fieldName="ctPoints" />
      <TextInput fieldName="certificateIdentifier" />
      <TextInput fieldName="certificateNumber" />

      <EnrolleeInput fieldName={"enrolleeId"} />
    </CreateUpdateForm>
  );
};

export default CtCertificateCreateUpdateForm;
