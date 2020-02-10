import React from "react";
import {Switch, useRouteMatch} from "react-router-dom";
import CreateEducationDocumentPage from "./pages/CreateEducationDocumentPage";
import UpdateEducationDocumentPage from "./pages/UpdateEducationDocumentPage";
import ShowEducationDocumentPage from "./pages/ShowEducationDocumentPage";
import ListEducationDocumentPage from "./pages/ListEducationDocumentPage";
import ProtectedRoute from "../shared/routing/ProtectedRoute";

const EducationDocumentRouter = () => {
    let match = useRouteMatch();

    return (
        <Switch>
            <ProtectedRoute exact path={`${match.path}`}>
                <ListEducationDocumentPage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/create`}>
                <CreateEducationDocumentPage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/:id/update`}>
                <UpdateEducationDocumentPage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/:id`}>
                <ShowEducationDocumentPage/>
            </ProtectedRoute>
        </Switch>
    )
};

export default EducationDocumentRouter;