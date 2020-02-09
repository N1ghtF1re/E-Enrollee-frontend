import React, { useEffect, useState } from "react";
import Loader from "react-loader";
import { HTTP_STATUS } from "../api/const";
import { useAuthenticatedRequest } from "../api/requestsService";
import { useParams } from "react-router-dom";
import Page404 from "../pages/Page404";
import { ShowProvider } from "./ShowContext";
import ShowPageLayout from "./ShowPageLayout";

const Show = ({ children, entityName, buttons }) => {
  const [isLoaded, setLoaded] = useState(true);
  const [data, setData] = useState({});
  const [isNotFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  const { sendGetRequest } = useAuthenticatedRequest();

  const id = useParams().id;
  const loadDataUrl = `/${entityName}/${id}`;

  useEffect(() => {
    sendGetRequest(loadDataUrl)
      .then(response => {
        response.json().then(json => {
          setData(json);
          setLoaded(true);
        });
      })
      .catch(error => {
        if (error.status === HTTP_STATUS.NOT_FOUND) {
          setNotFound(true);
        } else {
          setError("Server error");
          setLoaded(true);
        }
      });
  }, [loadDataUrl]);

  if (isNotFound) {
    return <Page404 />;
  }

  return (
    <Loader loaded={isLoaded}>
      <ShowProvider value={data}>
        <ShowPageLayout buttons={buttons} error={error}>
          {children}
        </ShowPageLayout>
      </ShowProvider>
    </Loader>
  );
};

export default Show;
