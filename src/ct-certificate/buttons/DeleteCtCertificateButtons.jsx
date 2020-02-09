import React from "react";
import DeleteButton from "../../shared/buttons/DeleteButton";
import {CT_CERTIFICATES} from "../const";

const DeleteCtCertificateButtons = ({id}) => {
    return <DeleteButton entityName={CT_CERTIFICATES} id={id} redirect={`/${CT_CERTIFICATES}`}/>
};

export default DeleteCtCertificateButtons;