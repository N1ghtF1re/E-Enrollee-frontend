import React from "react";
import CtCertificateCreateUpdateForm from "./CtCertificateCreateUpdateForm";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import {PAGE_TYPE} from "../../shared/form/CreateUpdateForm";
import {CT_CERTIFICATES} from "../const";


const CreateCtCertificatePage = () => (
  <DefaultPageLayout>
    <CtCertificateCreateUpdateForm
      title="Create ct certificate"
      entityName={CT_CERTIFICATES}
      pageType={PAGE_TYPE.CREATE}
    />
  </DefaultPageLayout>
);

export default CreateCtCertificatePage;