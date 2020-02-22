import React, { useEffect, useState } from "react";
import useAuthentication from "../../authentication/authenticationService";
import Loader from "react-loader";
import { Route, Redirect } from "react-router-dom";
import {useAuthorization} from "../authorization/auhtorizationService";

const ProtectedRoute = ({ exact = false, path, allowedRoles = [], children }) => {
  const { isAuthenticated } = useAuthentication();
  const {hasOneOfRoles, rolesLoaded} = useAuthorization();
  const [isUserAuthenticated, setAuthenticated] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    isAuthenticated()
      .then(result => {
        setAuthenticated(result);
      })
      .finally(() => setLoaded(true));
  });



  return (
    <Loader loaded={isLoaded && rolesLoaded}>
      {isUserAuthenticated ? (
          hasOneOfRoles(allowedRoles) ? (
              <Route exact={exact} path={path}>
                {children}
              </Route>
          ) : (
              <Redirect to='/403'/>
          )
      ) : (
        <Redirect to={"/login"} />
      )}
    </Loader>
  );
};

export default ProtectedRoute;
