import React from "react";
import EducationDocumentCreateUpdateForm from "./EducationDocumentCreateUpdateForm";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import {PAGE_TYPE} from "../../shared/form/CreateUpdateForm";
import {EDUCATION_DOCUMENT} from "../const";


const CreateEducationDocumentPage = () => (
  <DefaultPageLayout>
    <EducationDocumentCreateUpdateForm
      title="Create ct certificate"
      entityName={EDUCATION_DOCUMENT}
      pageType={PAGE_TYPE.CREATE}
    />
  </DefaultPageLayout>
);

export default CreateEducationDocumentPage;