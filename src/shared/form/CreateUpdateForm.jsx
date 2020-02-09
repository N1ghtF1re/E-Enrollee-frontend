import React, { useEffect, useState } from "react";
import FormLayout from "./FormLayout";
import { useAuthenticatedRequest } from "../api/requestsService";
import { useOnSubmit } from "./helper";
import { HTTP_STATUS } from "../api/const";
import Page404 from "../pages/Page404";
import { useParams } from "react-router-dom";
import Loader from "react-loader";

export const PAGE_TYPE = {
  CREATE: "CREATE",
  UPDATE: "UPDATE"
};

const CreateUpdateForm = ({
  title,
  validationSchema,
  initValues: originalInitValues = {},
  entityName,
  pageType,
  children
}) => {
  const {
    sendPostRequest,
    sendGetRequest,
    sendPutRequest
  } = useAuthenticatedRequest();
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [initValues, setInitValues] = useState(originalInitValues);
  const [isLoaded, setLoaded] = useState(false);
  const [isNotFound, setNotFound] = useState(false);

  const id = useParams().id;

  const loadDataUrl = `/${entityName}/${id}`;
  /**
   * Create url without id, update - the same as load but put method
   */
  const modifyUrl =
    pageType === PAGE_TYPE.UPDATE ? loadDataUrl : `/${entityName}`;

  const request =
    pageType === PAGE_TYPE.UPDATE ? sendPutRequest : sendPostRequest;
  const onSubmit = useOnSubmit(setError, setInfo, request, modifyUrl);

  useEffect(() => {
    if (pageType === PAGE_TYPE.UPDATE) {
      sendGetRequest(loadDataUrl)
        .then(response => {
          response.json().then(json => {
            setInitValues(json);
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
    } else {
      setInitValues(originalInitValues);
      setLoaded(true);
    }
  }, [pageType, id, entityName, loadDataUrl, originalInitValues]);

  if (isNotFound) {
    return <Page404 />;
  }

  return (
    <Loader loaded={isLoaded}>
      <FormLayout
        title={title}
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        error={error}
        info={info}
      >
        {children}
      </FormLayout>
    </Loader>
  );
};

export default CreateUpdateForm;
