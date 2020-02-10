import React from "react";
import {EDUCATION_DOCUMENT} from "../const";
import EditButton from "../../shared/buttons/EditButton";

const getEditUrl = (id) => `/${EDUCATION_DOCUMENT}/${id}/update`;

const EditEducationDocumentButton = ({id}) => {
    return <EditButton getEditPath={getEditUrl} id={id}/>
};

export default EditEducationDocumentButton;