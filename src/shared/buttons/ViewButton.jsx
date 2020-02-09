import React from "react";
import { useParams } from "react-router-dom";
import LinkButton from "./LinkButton";

const ViewButton = ({ id, getViewUrl }) => {
  const params = useParams();
  const entityId = id || params.id;

  const redirect = getViewUrl(entityId);

  return (
    <LinkButton className='btn-dark' to={redirect} label='View'/>
  );
};

export default ViewButton;
