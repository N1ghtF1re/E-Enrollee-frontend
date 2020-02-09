import React from "react";
import ListPage from "../../shared/list/ListPage";
import DefaultPageLayout from "../../shared/pagelayout/defaultpage/DefaultPageLayout";
import Table from "../../shared/list/table/Table";
import TableColumn from "../../shared/list/table/TableColumn";
import DateTableColumn from "../../shared/list/table/DateTableColumn";
import { ENROLLEES } from "../const";

const ListEnroleePage = () => {
  return (
    <DefaultPageLayout>
      <ListPage searchUrl={`/${ENROLLEES}/search`}>
        <Table>
          <TableColumn source={"firstName"} />
          <TableColumn source={"lastName"} />
          <TableColumn source={"middleName"} />
          <DateTableColumn source={"birthDate"} />
        </Table>
      </ListPage>
    </DefaultPageLayout>
  );
};

export default ListEnroleePage;
