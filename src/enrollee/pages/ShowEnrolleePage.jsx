import React from "react";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Show from "../../shared/show/Show";
import TextField from "../../shared/show/fields/TextField";
import ShowSection from "../../shared/show/ShowSection";
import DateField from "../../shared/show/fields/DateField";
import { ENROLLEES } from "../const";
import DeleteEnrolleeButton from "../buttons/DeleteEnrolleeButtons";
import EditEnrolleeButton from "../buttons/EditEnrolleeButton";

const ShowEnrolleePage = () => {
  const buttons = [<DeleteEnrolleeButton />, <EditEnrolleeButton />];

  return (
    <DefaultPageLayout>
      <Show entityName={ENROLLEES} buttons={buttons}>
        <ShowSection title="Main information">
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField source="middleName" />
          <DateField source="birthDate" />
        </ShowSection>
      </Show>
    </DefaultPageLayout>
  );
};

export default ShowEnrolleePage;
