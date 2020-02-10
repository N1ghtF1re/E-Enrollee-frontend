import React from "react";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Show from "../../shared/show/Show";
import TextField from "../../shared/show/fields/TextField";
import ShowSection from "../../shared/show/ShowSection";
import DateField from "../../shared/show/fields/DateField";
import { EDUCATION_DOCUMENT } from "../const";
import DeleteEnrolleeButton from "../buttons/DeleteEducationDocumentButtons";
import EditEducationDocumentButton from "../buttons/EditEducationDocumentButton";
import EnrolleeField from "../../enrollee/fields/EnrolleeField";

const ShowEducationDocumentPage = () => {
  const buttons = [<DeleteEnrolleeButton />, <EditEducationDocumentButton />];

  return (
    <DefaultPageLayout>
      <Show entityName={EDUCATION_DOCUMENT} buttons={buttons}>
        <ShowSection title="Main information">
          <EnrolleeField enrolleeNameSource='enrolleeName' enrolleeIdSource='enrolleeId'/>

          <TextField source="averageGrade" />
          <TextField source="educationalInstitution" />

        </ShowSection>

        <ShowSection title="Document information">
          <TextField source="documentUniqueNumber" />
          <TextField source="documentType" />
        </ShowSection>

      </Show>
    </DefaultPageLayout>
  );
};

export default ShowEducationDocumentPage;
