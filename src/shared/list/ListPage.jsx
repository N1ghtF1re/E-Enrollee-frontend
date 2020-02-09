import React, { useEffect, useReducer, useState } from "react";
import Pagination from "./Pagination";
import Loader from "react-loader";
import { useAuthenticatedRequest } from "../api/requestsService";
import ListPageLayout from "./ListPageLayout";
import { ListProvider } from "./ListContext";

const FilterAction = {
  CHANGE_PAGE: "CHANGE_PAGE"
};

const reducer = (state, action) => {
  switch (action.type) {
    case FilterAction.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload
      };
  }
};

const ListPage = ({ entityName, children, entitiesPerPage = 5, searchUrl }) => {
  const { sendPostRequest } = useAuthenticatedRequest();

  const [data, setData] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState("");

  const initState = {
    filters: [],
    sortBy: { field: "id", type: "ASC" },
    page: 0,
    pageSize: entitiesPerPage
  };
  const [searchRequest, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    sendPostRequest(searchUrl, searchRequest)
      .then(async response => {
        const json = await response.json();
        setTotalPages(json.totalPages);
        setData(json.content);
      })
      .catch(() => setError("Server error. Try again"))
      .finally(() => setLoaded(true));
  }, [entityName, searchRequest, sendPostRequest]);

  const pagination = (
    <Pagination
      totalPages={totalPages}
      page={searchRequest.page}
      onPageChange={page =>
        dispatch({ type: FilterAction.CHANGE_PAGE, payload: page })
      }
    />
  );

  return (
    <Loader loaded={isLoaded}>
      <ListProvider value={data}>
        <ListPageLayout pagination={pagination}>{children}</ListPageLayout>
      </ListProvider>
    </Loader>
  );
};

export default ListPage;
