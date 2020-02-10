import React from "react";
import * as Yup from "yup";
import TextInput from "../../shared/form/inputs/TextInput";
import CreateUpdateForm from "../../shared/form/CreateUpdateForm";
import EnrolleeInput from "../../enrollee/fields/EnrolleeInput";

const validationSchema = Yup.object().shape({
    averageGrade: Yup.number()
        .max(10)
        .min(0)
        .required("Required"),
    educationalInstitution: Yup.string()
        .required('Required'),
    documentUniqueNumber: Yup.string()
        .required('Required'),
    documentType: Yup.string()
        .required('Required'),
    enrolleeId: Yup.string()
        .required('Required')
});

const EducationDocumentCreateUpdateForm = props => {
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
      <TextInput fieldName="averageGrade" />
      <TextInput fieldName="educationalInstitution" />
      <TextInput fieldName="documentUniqueNumber" />
      <TextInput fieldName="documentType" />

      <EnrolleeInput fieldName={"enrolleeId"} />
    </CreateUpdateForm>
  );
};

export default EducationDocumentCreateUpdateForm;
