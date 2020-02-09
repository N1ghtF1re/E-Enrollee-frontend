import React from "react";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Table from "../../shared/list/table/Table";
import TableColumn from "../../shared/list/table/TableColumn";
import { CT_CERTIFICATES } from "../const";
import HttpListPage from "../../shared/list/HttpListPage";
import ButtonsTableColumn from "../../shared/list/table/ButtonsTableColumn";
import EditCtCertificateButton from "../buttons/EditCtCertificateButton";
import ViewCtCertificateButton from "../buttons/ViewCtCertificateButton";
import LinkButton from "../../shared/buttons/LinkButton";
import EnrolleeTableColumn from "../../enrollee/fields/EnrolleeTableColumn";
import DeleteCtCertificateButtons from "../buttons/DeleteCtCertificateButtons";
import SubjectTableColumn from "../fields/SubjectTableColumn";

const ListCtCertificatePage = () => {
  const createButton = (
    <LinkButton
      to={`/${CT_CERTIFICATES}/create`}
      label="Create new ct certificate"
    />
  );

  return (
    <DefaultPageLayout>
      <HttpListPage
        searchUrl={`/${CT_CERTIFICATES}/search`}
        createButton={createButton}
      >
        <Table>
          <TableColumn source={"id"} sortable />
          <TableColumn source={"ctPoints"} sortable />
          <SubjectTableColumn source="subject" sortable/>
          <TableColumn source={"year"} sortable/>
          <EnrolleeTableColumn
            enrolleeIdSource={"enrolleeId"}
            enrolleeNameSource={"enrolleeName"}
          />

          <ButtonsTableColumn
            getButtons={id => [
              <EditCtCertificateButton id={id} />,
              <DeleteCtCertificateButtons id={id} />,
              <ViewCtCertificateButton id={id} />
            ]}
          />
        </Table>
      </HttpListPage>
    </DefaultPageLayout>
  );
};

export default ListCtCertificatePage;
