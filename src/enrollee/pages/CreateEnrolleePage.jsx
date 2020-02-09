import React from "react";
import EnrolleeCreateUpdateForm from "./EnrolleeCreateUpdateForm";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import {PAGE_TYPE} from "../../shared/form/CreateUpdateForm";
import {ENROLLEES} from "../const";


const CreateEnrolleePage = () => (
  <DefaultPageLayout>
    <EnrolleeCreateUpdateForm
      title="Create enrolleee"
      entityName={ENROLLEES}
      pageType={PAGE_TYPE.CREATE}
    />
  </DefaultPageLayout>
);

export default CreateEnrolleePage;