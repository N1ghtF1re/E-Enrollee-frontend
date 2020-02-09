import React from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import CreateEnrolleePage from "./pages/CreateEnrolleePage";
import UpdateEnrolleePage from "./pages/UpdateEnrolleePage";
import ShowEnrolleePage from "./pages/ShowEnrolleePage";
import ListEnroleePage from "./pages/ListEnrolleePage";

const EnrolleeRouter = () => {
    let match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.path}`}>
                <ListEnroleePage/>
            </Route>
            <Route exact path={`${match.path}/create`}>
                <CreateEnrolleePage/>
            </Route>
            <Route exact path={`${match.path}/:id/update`}>
                <UpdateEnrolleePage/>
            </Route>
            <Route exact path={`${match.path}/:id`}>
                <ShowEnrolleePage/>
            </Route>
        </Switch>
    )
};

export default EnrolleeRouter;