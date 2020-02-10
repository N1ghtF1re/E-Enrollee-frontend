import React from "react";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Table from "../../shared/list/table/Table";
import TableColumn from "../../shared/list/table/TableColumn";
import { EDUCATION_DOCUMENT } from "../const";
import HttpListPage from "../../shared/list/HttpListPage";
import ButtonsTableColumn from "../../shared/list/table/ButtonsTableColumn";
import EditEducationDocumentButton from "../buttons/EditEducationDocumentButton";
import ViewEducationDocumentButton from "../buttons/ViewEducationDocumentButton";
import LinkButton from "../../shared/buttons/LinkButton";
import EnrolleeTableColumn from "../../enrollee/fields/EnrolleeTableColumn";
import DeleteEducationDocumentButtons from "../buttons/DeleteEducationDocumentButtons";

const ListEducationDocumentPage = () => {
  const createButton = (
    <LinkButton
      to={`/${EDUCATION_DOCUMENT}/create`}
      label="Create new ct certificate"
    />
  );

  return (
    <DefaultPageLayout>
      <HttpListPage
        searchUrl={`/${EDUCATION_DOCUMENT}/search`}
        createButton={createButton}
      >
        <Table>
          <TableColumn source={"id"} sortable />
          <TableColumn source={"averageGrade"} sortable />
          <TableColumn source={"educationalInstitution"} sortable filterable />
          <TableColumn source={"documentType"} />
          <EnrolleeTableColumn
            enrolleeIdSource={"enrolleeId"}
            enrolleeNameSource={"enrolleeName"}
          />

          <ButtonsTableColumn
            getButtons={id => [
              <EditEducationDocumentButton id={id} />,
              <DeleteEducationDocumentButtons id={id} />,
              <ViewEducationDocumentButton id={id} />
            ]}
          />
        </Table>
      </HttpListPage>
    </DefaultPageLayout>
  );
};

export default ListEducationDocumentPage;
