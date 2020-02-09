import React from "react";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Table from "../../shared/list/table/Table";
import TableColumn from "../../shared/list/table/TableColumn";
import DateTableColumn from "../../shared/list/table/DateTableColumn";
import { ENROLLEES } from "../const";
import HttpListPage from "../../shared/list/HttpListPage";

const ListEnroleePage = () => {
  return (
    <DefaultPageLayout>
      <HttpListPage searchUrl={`/${ENROLLEES}/search`}>
        <Table>
          <TableColumn source={"firstName"} />
          <TableColumn source={"lastName"} />
          <TableColumn source={"middleName"} />
          <DateTableColumn source={"birthDate"} />
        </Table>
      </HttpListPage>
    </DefaultPageLayout>
  );
};

export default ListEnroleePage;
