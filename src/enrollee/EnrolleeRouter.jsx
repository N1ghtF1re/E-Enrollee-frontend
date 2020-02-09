import React from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import CreateEnrolleePage from "./pages/CreateEnrolleePage";
import UpdateEnrolleePage from "./pages/UpdateEnrolleePage";
import ShowEnrolleePage from "./pages/ShowEnrolleePage";
import ListEnroleePage from "./pages/ListEnrolleePage";
import ProtectedRoute from "../shared/routing/ProtectedRoute";

const EnrolleeRouter = () => {
    let match = useRouteMatch();

    return (
        <Switch>
            <ProtectedRoute exact path={`${match.path}`}>
                <ListEnroleePage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/create`}>
                <CreateEnrolleePage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/:id/update`}>
                <UpdateEnrolleePage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/:id`}>
                <ShowEnrolleePage/>
            </ProtectedRoute>
        </Switch>
    )
};

export default EnrolleeRouter;