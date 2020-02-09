import React from "react";
import {Switch, useRouteMatch} from "react-router-dom";
import CreateCtCertificatePage from "./pages/CreateCtCertificatePage";
import UpdateCtCertificatePage from "./pages/UpdateCtCertificatePage";
import ShowCtCertificatePage from "./pages/ShowCtCertificatePage";
import ListCtCertificatePage from "./pages/ListCtCertificatePage";
import ProtectedRoute from "../shared/routing/ProtectedRoute";

const CtCertificateRouter = () => {
    let match = useRouteMatch();

    return (
        <Switch>
            <ProtectedRoute exact path={`${match.path}`}>
                <ListCtCertificatePage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/create`}>
                <CreateCtCertificatePage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/:id/update`}>
                <UpdateCtCertificatePage/>
            </ProtectedRoute>
            <ProtectedRoute exact path={`${match.path}/:id`}>
                <ShowCtCertificatePage/>
            </ProtectedRoute>
        </Switch>
    )
};

export default CtCertificateRouter;