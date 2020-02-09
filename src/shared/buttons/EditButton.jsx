import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

/**
 * Edit button
 * @param id -- id of entity (if not present - component will take it from path)
 * @param getEditPath -- function which returns edit path by od
 * @returns {*}
 * @constructor
 */
const EditButton = ({ id, getEditPath }) => {
    const [isNeedToEdit, setNeedToEdit] = useState(false);
    const params = useParams();

    const entityId = id || params.id;

    const redirect = getEditPath(entityId);


    if (isNeedToEdit) {
        return <Redirect to={redirect} />;
    }

    return (
        <Button
            variant="info"
            onClick={() => setNeedToEdit(true)}
        >
            Edit
        </Button>
    );
};

export default EditButton;
