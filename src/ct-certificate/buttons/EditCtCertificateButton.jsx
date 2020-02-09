import React from "react";
import {CT_CERTIFICATES} from "../const";
import EditButton from "../../shared/buttons/EditButton";

const getEditUrl = (id) => `/${CT_CERTIFICATES}/${id}/update`;

const EditCtCertificateButton = ({id}) => {
    return <EditButton getEditPath={getEditUrl} id={id}/>
};

export default EditCtCertificateButton;