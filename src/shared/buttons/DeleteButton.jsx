import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthenticatedRequest } from "../api/requestsService";
import {useListContext} from "../list/ListContext";

const DeleteButton = ({ id, entityName, redirect }) => {
  const [isDeleted, setDeleted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  const { sendDeleteRequest } = useAuthenticatedRequest();

  const list = useListContext();

  const entityId = id || params.id;

  function deleteEntityFromArray() {
    let index;
    list.forEach((value, i) => {
      if (value.id === entityId) {
        index = i
      }
    });

    index && list.splice(index, 1);
  }

  const deleteEntity = () => {
    setLoading(true);
    deleteEntityFromArray();

    sendDeleteRequest(`/${entityName}/${entityId}`)
      .then(() => setDeleted(true))
      .finally(() => setLoading(false));
  };

  if (isDeleted) {
    return <Redirect to={redirect} />;
  }

  return (
    <Button
      variant="danger"
      disabled={isLoading}
      onClick={() => deleteEntity()}
    >
        Delete
    </Button>
  );
};

export default DeleteButton;
