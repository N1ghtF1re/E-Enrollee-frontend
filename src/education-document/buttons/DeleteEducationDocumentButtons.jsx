import React from "react";
import DeleteButton from "../../shared/buttons/DeleteButton";
import {EDUCATION_DOCUMENT} from "../const";

const DeleteEducationDocumentButtons = ({id}) => {
    return <DeleteButton entityName={EDUCATION_DOCUMENT} id={id} redirect={`/${EDUCATION_DOCUMENT}`}/>
};

export default DeleteEducationDocumentButtons;