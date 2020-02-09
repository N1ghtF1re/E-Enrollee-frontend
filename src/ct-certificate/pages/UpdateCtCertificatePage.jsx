import React from "react";
import CtCertificateCreateUpdateForm from "./CtCertificateCreateUpdateForm";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";

import { PAGE_TYPE } from "../../shared/form/CreateUpdateForm";
import {CT_CERTIFICATES} from "../const";

const UpdateCtCertificatePage = () => (
  <DefaultPageLayout>
    <CtCertificateCreateUpdateForm
      title="Update ct certificate"
      entityName={CT_CERTIFICATES}
      pageType={PAGE_TYPE.UPDATE}
    />
  </DefaultPageLayout>
);

export default UpdateCtCertificatePage;
