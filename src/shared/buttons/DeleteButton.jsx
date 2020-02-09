import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthenticatedRequest } from "../api/requestsService";

const DeleteButton = ({ id, entityName, redirect }) => {
  const [isDeleted, setDeleted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  const { sendDeleteRequest } = useAuthenticatedRequest();

  const entityId = id || params.id;

  const deleteEntity = () => {
      console.log('test');
    setLoading(true);
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
