import React from "react";
import {ENROLLEES} from "../const";
import ViewButton from "../../shared/buttons/ViewButton";

const getViewUrl = (id) => `/${ENROLLEES}/${id}`;

const ViewEnrolleeButton = ({id}) => {
    return <ViewButton getViewUrl={getViewUrl} id={id}/>
};

export default ViewEnrolleeButton;