import { useAuthenticatedRequest } from "../api/requestsService";
import ListPageTemplate from "./ListPageTemplate";
import React from "react";
const getData = (sendPostRequest, searchUrl) => (
  searchRequest,
  setData,
  setError,
  setLoaded,
  setTotalPages
) => {
  sendPostRequest(searchUrl, searchRequest)
    .then(async response => {
      const json = await response.json();
      setTotalPages(json.totalPages);
      setData(json.content);
    })
    .catch(() => setError("Server error. Try again"))
    .finally(() => setLoaded(true));
};

const HttpListPage = ({ children, searchUrl, entitiesPerPage = 5 }) => {
  const { sendPostRequest } = useAuthenticatedRequest();
  return (
    <ListPageTemplate
      entitiesPerPage={entitiesPerPage}
      getData={getData(sendPostRequest, searchUrl)}
    >
      {children}
    </ListPageTemplate>
  );
};

export default HttpListPage;
