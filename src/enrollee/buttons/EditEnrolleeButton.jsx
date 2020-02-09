import React from "react";
import DeleteButton from "../../shared/buttons/DeleteButton";
import {ENROLLEES} from "../const";
import EditButton from "../../shared/buttons/EditButton";

const getEditUrl = (id) => `/${ENROLLEES}/${id}/update`;

const EditEnrolleeButton = ({id}) => {
    return <EditButton getEditPath={getEditUrl} id={id}/>
};

export default EditEnrolleeButton;