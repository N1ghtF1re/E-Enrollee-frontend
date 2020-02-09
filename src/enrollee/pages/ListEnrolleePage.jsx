import React from "react";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Table from "../../shared/list/table/Table";
import TableColumn from "../../shared/list/table/TableColumn";
import DateTableColumn from "../../shared/list/table/DateTableColumn";
import { ENROLLEES } from "../const";
import HttpListPage from "../../shared/list/HttpListPage";
import ButtonsTableColumn from "../../shared/list/table/ButtonsTableColumn";
import EditEnrolleeButton from "../buttons/EditEnrolleeButton";
import DeleteEnrolleeButton from "../buttons/DeleteEnrolleeButtons";
import ViewEnrolleeButton from "../buttons/ViewEnrolleeButton";
import LinkButton from "../../shared/buttons/LinkButton";

const ListEnroleePage = () => {
  const createButton = (
    <LinkButton to={`/${ENROLLEES}/create`} label="Create new enrolleee" />
  );

  return (
    <DefaultPageLayout>
      <HttpListPage
        searchUrl={`/${ENROLLEES}/search`}
        createButton={createButton}
      >
        <Table>
          <TableColumn source={"id"} sortable />
          <TableColumn source={"firstName"} sortable />
          <TableColumn source={"lastName"} sortable filterable />
          <TableColumn source={"middleName"} sortable />
          <DateTableColumn source={"birthDate"} filterable sortable/>
          <ButtonsTableColumn
            getButtons={id => [
              <EditEnrolleeButton id={id} />,
              <DeleteEnrolleeButton id={id} />,
              <ViewEnrolleeButton id={id} />
            ]}
          />
        </Table>
      </HttpListPage>
    </DefaultPageLayout>
  );
};

export default ListEnroleePage;
