import React from "react";
import {EDUCATION_DOCUMENT} from "../const";
import ViewButton from "../../shared/buttons/ViewButton";

const getViewUrl = (id) => `/${EDUCATION_DOCUMENT}/${id}`;

const ViewEducationDocumentButton = ({id}) => {
    return <ViewButton getViewUrl={getViewUrl} id={id}/>
};

export default ViewEducationDocumentButton;