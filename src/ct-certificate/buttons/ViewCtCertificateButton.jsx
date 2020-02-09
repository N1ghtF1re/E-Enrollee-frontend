import React from "react";
import {CT_CERTIFICATES} from "../const";
import ViewButton from "../../shared/buttons/ViewButton";

const getViewUrl = (id) => `/${CT_CERTIFICATES}/${id}`;

const ViewCtCertificateButton = ({id}) => {
    return <ViewButton getViewUrl={getViewUrl} id={id}/>
};

export default ViewCtCertificateButton;