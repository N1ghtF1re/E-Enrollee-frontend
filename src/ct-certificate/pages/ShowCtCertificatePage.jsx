import React from "react";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Show from "../../shared/show/Show";
import TextField from "../../shared/show/fields/TextField";
import ShowSection from "../../shared/show/ShowSection";
import DateField from "../../shared/show/fields/DateField";
import { CT_CERTIFICATES } from "../const";
import DeleteEnrolleeButton from "../buttons/DeleteCtCertificateButtons";
import EditCtCertificateButton from "../buttons/EditCtCertificateButton";
import EnrolleeField from "../../enrollee/fields/EnrolleeField";
import SubjectField from "../fields/SubjectField";

const ShowCtCertificatePage = () => {
  const buttons = [<DeleteEnrolleeButton />, <EditCtCertificateButton />];

  return (
    <DefaultPageLayout>
      <Show entityName={CT_CERTIFICATES} buttons={buttons}>
        <ShowSection title="Main information">
          <EnrolleeField enrolleeNameSource='enrolleeName' enrolleeIdSource='enrolleeId'/>
          <SubjectField source="subject"/>
          <DateField source="year" />
        </ShowSection>

        <ShowSection title="Certificate Identifiers">
          <TextField source="certificateIdentifier" />
          <TextField source="certificateNumber" />
        </ShowSection>

      </Show>
    </DefaultPageLayout>
  );
};

export default ShowCtCertificatePage;
