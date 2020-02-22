import React from "react";
import { ENROLLEES } from "../const";
import EditButton from "../../shared/buttons/EditButton";
import { useAuthorization } from "../../shared/authorization/auhtorizationService";

const getEditUrl = id => `/${ENROLLEES}/${id}/update`;

const EditEnrolleeButton = ({ id }) => {
  const { hasOneOfRoles } = useAuthorization();
  return (
    hasOneOfRoles(["ROLE_ADMIN"]) && (
      <EditButton getEditPath={getEditUrl} id={id} />
    )
  );
};

export default EditEnrolleeButton;
