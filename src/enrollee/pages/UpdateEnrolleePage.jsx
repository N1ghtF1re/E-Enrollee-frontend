import React from "react";
import EnrolleeCreateUpdateForm from "./EnrolleeCreateUpdateForm";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";

import { PAGE_TYPE } from "../../shared/form/CreateUpdateForm";
import {ENROLLEES} from "../const";

const UpdateEnrolleePage = () => (
  <DefaultPageLayout>
    <EnrolleeCreateUpdateForm
      title="Update enrolleee"
      entityName={ENROLLEES}
      pageType={PAGE_TYPE.UPDATE}
    />
  </DefaultPageLayout>
);

export default UpdateEnrolleePage;
