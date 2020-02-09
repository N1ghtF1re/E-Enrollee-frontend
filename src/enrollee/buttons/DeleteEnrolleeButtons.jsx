import React from "react";
import DeleteButton from "../../shared/buttons/DeleteButton";
import {ENROLLEES} from "../const";

const DeleteEnrolleeButton = ({id}) => {
    return <DeleteButton entityName={ENROLLEES} id={id} redirect={`/${ENROLLEES}`}/>
};

export default DeleteEnrolleeButton;